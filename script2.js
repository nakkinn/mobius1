const canvasElement = document.querySelector('#myCanvas')
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#myCanvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0, 0, +1000);

const controls = new THREE.OrbitControls(camera, canvasElement);

//
//GUI
//
const datGUIObj = {
    para:0
};

const gui = new dat.GUI({ autoPlace: true, width: 600});
gui.domElement.id = 'gui';
console.log(gui);

gui.add(datGUIObj,'para',0, Math.PI);

//
//メインジオメトリ
//
let geometry = new THREE.BufferGeometry();

let detail = 40;

let v0 = [];
let v = []
for(let i=0; i<detail; i++){
    v0[i] = [];
    v[i] = [];
    for(let j=0; j<detail; j++){
        v[i][j] = [];
        v0[i][j] = [];
        let x = i/(detail-1)*Math.PI - Math.PI/2;
        let y = j/(detail-1)*2*Math.PI;

        v0[i][j][0]=Math.cos(x)*Math.cos(y);
        v0[i][j][1]=Math.cos(x)*Math.sin(y);
        v0[i][j][2]=Math.sin(x)*Math.cos(y/2);
        v0[i][j][3]=Math.sin(x)*Math.sin(y/2);
    }
}

let angle=Math.PI/4;
for(let i=0;i<detail;i++)   for(let j=0;j<detail;j++){
    let temx=v0[i][j][0];
    let temy=v0[i][j][3];
    v0[i][j][0]=temx*Math.cos(angle)-temy*Math.sin(angle);
    v0[i][j][3]=temx*Math.sin(angle)+temy*Math.cos(angle);
}

let tem = [];
for(let i=0; i<detail; i++) for(let j=0; j<detail; j++) tem.push(v0[i][j][0]/(1-v0[i][j][3])*150, v0[i][j][1]/(1-v0[i][j][3])*150, v0[i][j][2]/(1-v0[i][j][3])*150);
let vertices = new Float32Array(tem);


let indices = [];
for(let i=0; i<detail-1 ;i++) for(let j=0; j<detail-1; j++){
    indices.push(i*detail+j, i*detail+(j+1)%detail, (i+1)%detail*detail+j);
    indices.push((i+1)%detail*detail+(j+1)%detail, (i+1)%detail*detail+j, i*detail+(j+1)%detail);
}


geometry.setIndex( indices );

geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

geometry.computeVertexNormals();


for(let i=0; i<detail; i++){
    geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3] = -geometry.attributes.normal.array[i*detail*3];
    geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3+1] = -geometry.attributes.normal.array[i*detail*3+1];
    geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3+2] = -geometry.attributes.normal.array[i*detail*3+2];
}



const material = new THREE.MeshNormalMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
//material.flatShading = true;
let mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);

//
//境界のチューブ
//

class mycurve extends THREE.Curve {

    constructor(rota) {
		super();
		this.rota = rota;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

        let s = t*Math.PI*4;

        let a = Math.PI/2;
        let tx = Math.cos(a)*Math.cos(s);
        let ty = Math.cos(a)*Math.sin(s);
        let tz = Math.sin(a)*Math.cos(s/2);
        let tw = Math.sin(a)*Math.sin(s/2);

        let tx1 = tx;
        let tw1 = tw;
        tx = tx1*Math.cos(this.rota)-tw1*Math.sin(this.rota);
        tw = tx1*Math.sin(this.rota)+tw1*Math.cos(this.rota);

		return optionalTarget.set( tx/(1-tw)*150, ty/(1-tw)*150, tz/(1-tw)*150 );
	}
}

let path = new mycurve(Math.PI/4);
let geometry1 = new THREE.TubeGeometry( path, 60, 5, 8, false );
const material1 = new THREE.MeshBasicMaterial( { color: 0xff8800 , side:THREE.DoubleSide} );

let mesh1 = new THREE.Mesh( geometry1, material1 );
scene.add( mesh1 );

//
//クリッピング
//

let plane1 = new THREE.Plane(new THREE.Vector3(1,0,0),500);
let plane2 = new THREE.Plane(new THREE.Vector3(-1,0,0),500);
let plane3 = new THREE.Plane(new THREE.Vector3(0,1,0),500);
let plane4 = new THREE.Plane(new THREE.Vector3(0,-1,0),500);
let plane5 = new THREE.Plane(new THREE.Vector3(0,0,-1),500);
let plane6 = new THREE.Plane(new THREE.Vector3(0,0,1),500);

renderer.clippingPlanes.push(plane1,plane2,plane3,plane4,plane5,plane6);

tick();

function tick() {
    
    angle = datGUIObj.para;

    for(let i=0;i<detail;i++)   for(let j=0;j<detail;j++){
        v[i][j][1] = v0[i][j][1];
        v[i][j][2] = v0[i][j][2];
        v[i][j][0]=v0[i][j][0]*Math.cos(angle)-v0[i][j][3]*Math.sin(angle);
        v[i][j][3]=v0[i][j][0]*Math.sin(angle)+v0[i][j][3]*Math.cos(angle);
        
    }

    let tem = [];
    for(let i=0; i<detail; i++) for(let j=0; j<detail; j++) tem.push(v[i][j][0]/(1-v[i][j][3])*150, v[i][j][1]/(1-v[i][j][3])*150, v[i][j][2]/(1-v[i][j][3])*150);
    let vertices = new Float32Array(tem);

    indices = [];
    for(let i=0; i<detail-1 ;i++) for(let j=0; j<detail-1; j++){

        let x1,x2,x3,y1,y2,y3,z1,z2,z3;
        x1 = vertices[(i*detail+j)*3];
        y1 = vertices[(i*detail+j)*3+1];
        z1 = vertices[(i*detail+j)*3+2];
        x2 = vertices[(i*detail+(j+1)%detail)*3];
        y2 = vertices[(i*detail+(j+1)%detail)*3+1];
        z2 = vertices[(i*detail+(j+1)%detail)*3+2];
        x3 = vertices[((i+1)%detail*detail+j)*3];
        y3 = vertices[((i+1)%detail*detail+j)*3+1];
        z3 = vertices[((i+1)%detail*detail+j)*3+2];

        let d = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2)+(x3-x2)*(x3-x2)+(y3-y2)*(y3-y2)+(z3-z2)*(z3-z2);

        if(d<1000000){
            indices.push(i*detail+j, i*detail+(j+1)%detail, (i+1)%detail*detail+j);
            indices.push((i+1)%detail*detail+(j+1)%detail, (i+1)%detail*detail+j, i*detail+(j+1)%detail);
        }
    }


    geometry.setIndex( indices );
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    geometry.computeVertexNormals();
    for(let i=0; i<detail; i++){
        geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3] = -geometry.attributes.normal.array[i*detail*3];
        geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3+1] = -geometry.attributes.normal.array[i*detail*3+1];
        geometry.attributes.normal.array[((detail-1-i)*detail+detail-1)*3+2] = -geometry.attributes.normal.array[i*detail*3+2];
    }
    
    
    //
    //チューブの更新
    //

    scene.remove( mesh1 );
    path = new mycurve(Math.PI/4 + datGUIObj.para);
    geometry1 = new THREE.TubeGeometry( path, 40, 5, 8, false );
    mesh1 = new THREE.Mesh( geometry1, material1 );
    scene.add( mesh1 );
    

    //
    //レンダリング
    //
    renderer.render(scene, camera); 
    requestAnimationFrame(tick);

}

/*
renderer.info.rendere.frame:framecount 
*/


