//3Dモデルの作成、更新をするクラス
class Iuvmodel{

    //オブジェクト生成時に呼び出される
    constructor(uvvts, index, fx, fy, fz){
 
        this.uvvts = uvvts;
        this.index = index;
        this.fx = fx;
        this.fy = fy;
        this.fz = fz;

        let tmp;

        //ジオメトリの生成
        this.geometry = new THREE.BufferGeometry();

        //ポリゴンの頂点番号を設定
        if(index[0].length==4){ //頂点リストが4角ポリゴンで表している場合、3角ポリゴンに変換
            tmp = [];
            for(let i=0; i<index.length; i++){
                tmp.push(index[i][0],index[i][1],index[i][3]);
                tmp.push(index[i][2],index[i][3],index[i][1]);
            }
            this.index = tmp.concat();
        }else   this.index = index.flat(1);

        this.geometry.setIndex(this.index);  

        //ポリゴンの頂点座標を設定
        tmp = [];
        for(let i=0; i<uvvts.length; i++)   tmp.push(fx(this.uvvts[i][0],this.uvvts[i][1]), fy(this.uvvts[i][0],this.uvvts[i][1]), fz(this.uvvts[i][0],this.uvvts[i][1]));
        this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tmp), 3));

        //頂点法線の計算
        this.geometry.computeVertexNormals();   

        //マテリアルの設定
        this.material = new THREE.MeshNormalMaterial({side:THREE.DoubleSide});
        this.material.flatShading = true;   //フラットシェード

        //メッシュ（ジオメトリ＋マテリアル）の生成
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        //シーンにメッシュを追加
        scene.add(this.mesh);   
 
    }

    
 
    //座標の更新
    Iupdate(){

        //ポリゴンの頂点座標の再設定
        let tmp = [];
        for(let i=0; i<this.uvvts.length; i++)   tmp.push(this.fx(this.uvvts[i][0],this.uvvts[i][1]), this.fy(this.uvvts[i][0],this.uvvts[i][1]), this.fz(this.uvvts[i][0],this.uvvts[i][1]));
        this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tmp), 3));

        //頂点法線の再計算
        this.geometry.computeVertexNormals();
        
    }

    //最長辺がthresholdより大きいポリゴンを非表示にする
    Iremovehugemesh(threshold){
    
        let vlist = this.geometry.attributes.position.array;
        let indexcopy = this.index.concat();
        let x1, y1, z1, x2, y2, z2, x3, y3, z3;
        let maxdis;

        function Idist(a,b,c,d,e,f){
            return Math.sqrt((a-d)*(a-d)+(b-e)*(b-e)+(c-f)*(c-f));
        }

        for(let i=0; i<indexcopy.length; i+=3){
            x1 = vlist[indexcopy[i]*3];
            y1 = vlist[indexcopy[i]*3+1];
            z1 = vlist[indexcopy[i]*3+2];
            x2 = vlist[indexcopy[i+1]*3];
            y2 = vlist[indexcopy[i+1]*3+1];
            z2 = vlist[indexcopy[i+1]*3+2];
            x3 = vlist[indexcopy[i+2]*3];
            y3 = vlist[indexcopy[i+2]*3+1];
            z3 = vlist[indexcopy[i+2]*3+2];

            maxdis = Math.max(Idist(x1,y1,z1,x2,y2,z2),Idist(x3,y3,z3,x2,y2,z2),Idist(x1,y1,z1,x3,y3,z3));

            if(maxdis > threshold){
                indexcopy.splice(i,3);
                i -= 3;
            }

        }

        this.geometry.setIndex(indexcopy);
   
    }

}


//境界のチューブ
class mycurve extends THREE.Curve {

    constructor(rota) {
		super();
		this.rota = rota;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

        this.rota = mygui.t;

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

		return optionalTarget.set( tx/(1-tw)*100, ty/(1-tw)*100, tz/(1-tw)*100 );
	}
}



//レンダラー
const canvasElement = document.querySelector('#myCanvas');
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(960, 540); //画面の横、縦サイズ


//クリッピング
let cpsize = 300;   //クリッピングする立方体の大きさ（辺長/2）

let cplane1 = new THREE.Plane(new THREE.Vector3(1,0,0),cpsize);
let cplane2 = new THREE.Plane(new THREE.Vector3(-1,0,0),cpsize);
let cplane3 = new THREE.Plane(new THREE.Vector3(0,1,0),cpsize);
let cplane4 = new THREE.Plane(new THREE.Vector3(0,-1,0),cpsize);
let cplane5 = new THREE.Plane(new THREE.Vector3(0,0,-1),cpsize);
let cplane6 = new THREE.Plane(new THREE.Vector3(0,0,1),cpsize);

renderer.clippingPlanes.push(cplane1,cplane2,cplane3,cplane4,cplane5,cplane6);


//シーン
const scene = new THREE.Scene();


//カメラ
const camera = new THREE.PerspectiveCamera(45, 960/540); //射影カメラ　引数：(視野角、アスペクト比)
camera.position.set(0, 0, 1000);    //カメラ位置
const controls = new THREE.OrbitControls(camera, canvasElement);    //マウスによる視点操作


//スライダー
const mygui = {
    t:Math.PI/4,    //変数名：初期値
};
const gui = new dat.GUI({height:30});
gui.add(mygui,'t', 0.000001, Math.PI-0.00001); //スライダーを追加　引数：（mygui, '変数名', 最小値, 最大値）


//(u,v)から(x,y,z)への３つの写像
//注：パラメータ t は mygui.t とかく
//   三角関数 sin は Math.sin() と表す
//   時間（経過フレーム数）：　renderer.info.rendere.frame
function Ifunc1x(u,v){
    return 100 * (Math.cos(mygui.t)*Math.cos(u)*Math.cos(v) - Math.sin(mygui.t)*Math.sin(u)*Math.sin(v/2)) / (1 - Math.sin(mygui.t)*Math.cos(u)*Math.cos(v) - Math.cos(mygui.t)*Math.sin(u)*Math.sin(v/2));
}
function Ifunc1y(u,v){
    return 100 * Math.cos(u)*Math.sin(v) / (1 - Math.sin(mygui.t)*Math.cos(u)*Math.cos(v) - Math.cos(mygui.t)*Math.sin(u)*Math.sin(v/2));
}
function Ifunc1z(u,v){
    return 100 * Math.sin(u)*Math.cos(v/2) / (1 - Math.sin(mygui.t)*Math.cos(u)*Math.cos(v) - Math.cos(mygui.t)*Math.sin(u)*Math.sin(v/2));
}


//モデルの生成・追加
//( R^2上のuv座標, ポリゴンの頂点番号, 関数(u,v)→x, (u,v)→y, (u,v)→z )
let mobius1 = new Iuvmodel(uvvts1, index1, Ifunc1x, Ifunc1y, Ifunc1z);


//チューブ
let path = new mycurve(mygui.t);
let geometry1 = new THREE.TubeGeometry( path, 60, 5, 8, false );
const material1 = new THREE.MeshBasicMaterial( { color: 0xff8800 , side:THREE.DoubleSide} );
let mesh1 = new THREE.Mesh( geometry1, material1 );
scene.add( mesh1 );


//描画処理（毎フレーム行われる）
Ianimation();

function Ianimation(){

    mobius1.Iupdate();  //スライダーや時間によって変形するモデルの更新 
    mobius1.Iremovehugemesh(1000);  //巨大なメッシュを削除

    //チューブの更新
    scene.remove( mesh1 );
    path = new mycurve(mygui.t);
    path.getPoint();
    geometry1 = new THREE.TubeGeometry( path, 40, 5, 8, false );
    mesh1 = new THREE.Mesh( geometry1, material1 );
    scene.add( mesh1 );

    renderer.render(scene, camera); //レンダリング
    requestAnimationFrame(Ianimation);  //Ianimationを繰り返す

}



