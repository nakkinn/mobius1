/*
R^2上の(u,v)座標と、ポリゴンの頂点番号を記述したファイル

(u,v)座標は二次元配列を用いて表す。
let (変数名) = [[u1,v1],[u2,v2],[u3,v3],...,[un,vn]];

ポリゴンの頂点番号を2次元配列を用いて表す。
三角ポリゴンの場合
let (変数名) = [[a0,a1,a2],[a3,a4,a5],[a6,a7,a8]...];
四角ポリゴンの場合
let (変数名) = [[a0,a1,a2,a3],[a4,a5,a6,a7],[a8,a9,a10,a11]...];

注：面の向き（時計周りか反時計回りか）は整える
注：１番初めの頂点を０番頂点とする
*/

let uvvts1 = [[-1.5707963267948966,0],[-1.5707963267948966,0.3306939635357677],[-1.5707963267948966,0.6613879270715354],[-1.5707963267948966,0.992081890607303],[-1.5707963267948966,1.3227758541430708],[-1.5707963267948966,1.6534698176788385],[-1.5707963267948966,1.984163781214606],[-1.5707963267948966,2.3148577447503738],[-1.5707963267948966,2.6455517082861415],[-1.5707963267948966,2.9762456718219092],[-1.5707963267948966,3.306939635357677],[-1.5707963267948966,3.6376335988934447],[-1.5707963267948966,3.968327562429212],[-1.5707963267948966,4.29902152596498],[-1.5707963267948966,4.6297154895007475],[-1.5707963267948966,4.960409453036515],[-1.5707963267948966,5.291103416572283],[-1.5707963267948966,5.621797380108051],[-1.5707963267948966,5.9524913436438185],[-1.5707963267948966,6.283185307179586],[-1.4054493450270127,0],[-1.4054493450270127,0.3306939635357677],[-1.4054493450270127,0.6613879270715354],[-1.4054493450270127,0.992081890607303],[-1.4054493450270127,1.3227758541430708],[-1.4054493450270127,1.6534698176788385],[-1.4054493450270127,1.984163781214606],[-1.4054493450270127,2.3148577447503738],[-1.4054493450270127,2.6455517082861415],[-1.4054493450270127,2.9762456718219092],[-1.4054493450270127,3.306939635357677],[-1.4054493450270127,3.6376335988934447],[-1.4054493450270127,3.968327562429212],[-1.4054493450270127,4.29902152596498],[-1.4054493450270127,4.6297154895007475],[-1.4054493450270127,4.960409453036515],[-1.4054493450270127,5.291103416572283],[-1.4054493450270127,5.621797380108051],[-1.4054493450270127,5.9524913436438185],[-1.4054493450270127,6.283185307179586],[-1.2401023632591288,0],[-1.2401023632591288,0.3306939635357677],[-1.2401023632591288,0.6613879270715354],[-1.2401023632591288,0.992081890607303],[-1.2401023632591288,1.3227758541430708],[-1.2401023632591288,1.6534698176788385],[-1.2401023632591288,1.984163781214606],[-1.2401023632591288,2.3148577447503738],[-1.2401023632591288,2.6455517082861415],[-1.2401023632591288,2.9762456718219092],[-1.2401023632591288,3.306939635357677],[-1.2401023632591288,3.6376335988934447],[-1.2401023632591288,3.968327562429212],[-1.2401023632591288,4.29902152596498],[-1.2401023632591288,4.6297154895007475],[-1.2401023632591288,4.960409453036515],[-1.2401023632591288,5.291103416572283],[-1.2401023632591288,5.621797380108051],[-1.2401023632591288,5.9524913436438185],[-1.2401023632591288,6.283185307179586],[-1.074755381491245,0],[-1.074755381491245,0.3306939635357677],[-1.074755381491245,0.6613879270715354],[-1.074755381491245,0.992081890607303],[-1.074755381491245,1.3227758541430708],[-1.074755381491245,1.6534698176788385],[-1.074755381491245,1.984163781214606],[-1.074755381491245,2.3148577447503738],[-1.074755381491245,2.6455517082861415],[-1.074755381491245,2.9762456718219092],[-1.074755381491245,3.306939635357677],[-1.074755381491245,3.6376335988934447],[-1.074755381491245,3.968327562429212],[-1.074755381491245,4.29902152596498],[-1.074755381491245,4.6297154895007475],[-1.074755381491245,4.960409453036515],[-1.074755381491245,5.291103416572283],[-1.074755381491245,5.621797380108051],[-1.074755381491245,5.9524913436438185],[-1.074755381491245,6.283185307179586],[-0.9094083997233612,0],[-0.9094083997233612,0.3306939635357677],[-0.9094083997233612,0.6613879270715354],[-0.9094083997233612,0.992081890607303],[-0.9094083997233612,1.3227758541430708],[-0.9094083997233612,1.6534698176788385],[-0.9094083997233612,1.984163781214606],[-0.9094083997233612,2.3148577447503738],[-0.9094083997233612,2.6455517082861415],[-0.9094083997233612,2.9762456718219092],[-0.9094083997233612,3.306939635357677],[-0.9094083997233612,3.6376335988934447],[-0.9094083997233612,3.968327562429212],[-0.9094083997233612,4.29902152596498],[-0.9094083997233612,4.6297154895007475],[-0.9094083997233612,4.960409453036515],[-0.9094083997233612,5.291103416572283],[-0.9094083997233612,5.621797380108051],[-0.9094083997233612,5.9524913436438185],[-0.9094083997233612,6.283185307179586],[-0.7440614179554773,0],[-0.7440614179554773,0.3306939635357677],[-0.7440614179554773,0.6613879270715354],[-0.7440614179554773,0.992081890607303],[-0.7440614179554773,1.3227758541430708],[-0.7440614179554773,1.6534698176788385],[-0.7440614179554773,1.984163781214606],[-0.7440614179554773,2.3148577447503738],[-0.7440614179554773,2.6455517082861415],[-0.7440614179554773,2.9762456718219092],[-0.7440614179554773,3.306939635357677],[-0.7440614179554773,3.6376335988934447],[-0.7440614179554773,3.968327562429212],[-0.7440614179554773,4.29902152596498],[-0.7440614179554773,4.6297154895007475],[-0.7440614179554773,4.960409453036515],[-0.7440614179554773,5.291103416572283],[-0.7440614179554773,5.621797380108051],[-0.7440614179554773,5.9524913436438185],[-0.7440614179554773,6.283185307179586],[-0.5787144361875936,0],[-0.5787144361875936,0.3306939635357677],[-0.5787144361875936,0.6613879270715354],[-0.5787144361875936,0.992081890607303],[-0.5787144361875936,1.3227758541430708],[-0.5787144361875936,1.6534698176788385],[-0.5787144361875936,1.984163781214606],[-0.5787144361875936,2.3148577447503738],[-0.5787144361875936,2.6455517082861415],[-0.5787144361875936,2.9762456718219092],[-0.5787144361875936,3.306939635357677],[-0.5787144361875936,3.6376335988934447],[-0.5787144361875936,3.968327562429212],[-0.5787144361875936,4.29902152596498],[-0.5787144361875936,4.6297154895007475],[-0.5787144361875936,4.960409453036515],[-0.5787144361875936,5.291103416572283],[-0.5787144361875936,5.621797380108051],[-0.5787144361875936,5.9524913436438185],[-0.5787144361875936,6.283185307179586],[-0.4133674544197097,0],[-0.4133674544197097,0.3306939635357677],[-0.4133674544197097,0.6613879270715354],[-0.4133674544197097,0.992081890607303],[-0.4133674544197097,1.3227758541430708],[-0.4133674544197097,1.6534698176788385],[-0.4133674544197097,1.984163781214606],[-0.4133674544197097,2.3148577447503738],[-0.4133674544197097,2.6455517082861415],[-0.4133674544197097,2.9762456718219092],[-0.4133674544197097,3.306939635357677],[-0.4133674544197097,3.6376335988934447],[-0.4133674544197097,3.968327562429212],[-0.4133674544197097,4.29902152596498],[-0.4133674544197097,4.6297154895007475],[-0.4133674544197097,4.960409453036515],[-0.4133674544197097,5.291103416572283],[-0.4133674544197097,5.621797380108051],[-0.4133674544197097,5.9524913436438185],[-0.4133674544197097,6.283185307179586],[-0.2480204726518258,0],[-0.2480204726518258,0.3306939635357677],[-0.2480204726518258,0.6613879270715354],[-0.2480204726518258,0.992081890607303],[-0.2480204726518258,1.3227758541430708],[-0.2480204726518258,1.6534698176788385],[-0.2480204726518258,1.984163781214606],[-0.2480204726518258,2.3148577447503738],[-0.2480204726518258,2.6455517082861415],[-0.2480204726518258,2.9762456718219092],[-0.2480204726518258,3.306939635357677],[-0.2480204726518258,3.6376335988934447],[-0.2480204726518258,3.968327562429212],[-0.2480204726518258,4.29902152596498],[-0.2480204726518258,4.6297154895007475],[-0.2480204726518258,4.960409453036515],[-0.2480204726518258,5.291103416572283],[-0.2480204726518258,5.621797380108051],[-0.2480204726518258,5.9524913436438185],[-0.2480204726518258,6.283185307179586],[-0.08267349088394194,0],[-0.08267349088394194,0.3306939635357677],[-0.08267349088394194,0.6613879270715354],[-0.08267349088394194,0.992081890607303],[-0.08267349088394194,1.3227758541430708],[-0.08267349088394194,1.6534698176788385],[-0.08267349088394194,1.984163781214606],[-0.08267349088394194,2.3148577447503738],[-0.08267349088394194,2.6455517082861415],[-0.08267349088394194,2.9762456718219092],[-0.08267349088394194,3.306939635357677],[-0.08267349088394194,3.6376335988934447],[-0.08267349088394194,3.968327562429212],[-0.08267349088394194,4.29902152596498],[-0.08267349088394194,4.6297154895007475],[-0.08267349088394194,4.960409453036515],[-0.08267349088394194,5.291103416572283],[-0.08267349088394194,5.621797380108051],[-0.08267349088394194,5.9524913436438185],[-0.08267349088394194,6.283185307179586],[0.08267349088394194,0],[0.08267349088394194,0.3306939635357677],[0.08267349088394194,0.6613879270715354],[0.08267349088394194,0.992081890607303],[0.08267349088394194,1.3227758541430708],[0.08267349088394194,1.6534698176788385],[0.08267349088394194,1.984163781214606],[0.08267349088394194,2.3148577447503738],[0.08267349088394194,2.6455517082861415],[0.08267349088394194,2.9762456718219092],[0.08267349088394194,3.306939635357677],[0.08267349088394194,3.6376335988934447],[0.08267349088394194,3.968327562429212],[0.08267349088394194,4.29902152596498],[0.08267349088394194,4.6297154895007475],[0.08267349088394194,4.960409453036515],[0.08267349088394194,5.291103416572283],[0.08267349088394194,5.621797380108051],[0.08267349088394194,5.9524913436438185],[0.08267349088394194,6.283185307179586],[0.2480204726518258,0],[0.2480204726518258,0.3306939635357677],[0.2480204726518258,0.6613879270715354],[0.2480204726518258,0.992081890607303],[0.2480204726518258,1.3227758541430708],[0.2480204726518258,1.6534698176788385],[0.2480204726518258,1.984163781214606],[0.2480204726518258,2.3148577447503738],[0.2480204726518258,2.6455517082861415],[0.2480204726518258,2.9762456718219092],[0.2480204726518258,3.306939635357677],[0.2480204726518258,3.6376335988934447],[0.2480204726518258,3.968327562429212],[0.2480204726518258,4.29902152596498],[0.2480204726518258,4.6297154895007475],[0.2480204726518258,4.960409453036515],[0.2480204726518258,5.291103416572283],[0.2480204726518258,5.621797380108051],[0.2480204726518258,5.9524913436438185],[0.2480204726518258,6.283185307179586],[0.41336745441970946,0],[0.41336745441970946,0.3306939635357677],[0.41336745441970946,0.6613879270715354],[0.41336745441970946,0.992081890607303],[0.41336745441970946,1.3227758541430708],[0.41336745441970946,1.6534698176788385],[0.41336745441970946,1.984163781214606],[0.41336745441970946,2.3148577447503738],[0.41336745441970946,2.6455517082861415],[0.41336745441970946,2.9762456718219092],[0.41336745441970946,3.306939635357677],[0.41336745441970946,3.6376335988934447],[0.41336745441970946,3.968327562429212],[0.41336745441970946,4.29902152596498],[0.41336745441970946,4.6297154895007475],[0.41336745441970946,4.960409453036515],[0.41336745441970946,5.291103416572283],[0.41336745441970946,5.621797380108051],[0.41336745441970946,5.9524913436438185],[0.41336745441970946,6.283185307179586],[0.5787144361875933,0],[0.5787144361875933,0.3306939635357677],[0.5787144361875933,0.6613879270715354],[0.5787144361875933,0.992081890607303],[0.5787144361875933,1.3227758541430708],[0.5787144361875933,1.6534698176788385],[0.5787144361875933,1.984163781214606],[0.5787144361875933,2.3148577447503738],[0.5787144361875933,2.6455517082861415],[0.5787144361875933,2.9762456718219092],[0.5787144361875933,3.306939635357677],[0.5787144361875933,3.6376335988934447],[0.5787144361875933,3.968327562429212],[0.5787144361875933,4.29902152596498],[0.5787144361875933,4.6297154895007475],[0.5787144361875933,4.960409453036515],[0.5787144361875933,5.291103416572283],[0.5787144361875933,5.621797380108051],[0.5787144361875933,5.9524913436438185],[0.5787144361875933,6.283185307179586],[0.7440614179554772,0],[0.7440614179554772,0.3306939635357677],[0.7440614179554772,0.6613879270715354],[0.7440614179554772,0.992081890607303],[0.7440614179554772,1.3227758541430708],[0.7440614179554772,1.6534698176788385],[0.7440614179554772,1.984163781214606],[0.7440614179554772,2.3148577447503738],[0.7440614179554772,2.6455517082861415],[0.7440614179554772,2.9762456718219092],[0.7440614179554772,3.306939635357677],[0.7440614179554772,3.6376335988934447],[0.7440614179554772,3.968327562429212],[0.7440614179554772,4.29902152596498],[0.7440614179554772,4.6297154895007475],[0.7440614179554772,4.960409453036515],[0.7440614179554772,5.291103416572283],[0.7440614179554772,5.621797380108051],[0.7440614179554772,5.9524913436438185],[0.7440614179554772,6.283185307179586],[0.9094083997233611,0],[0.9094083997233611,0.3306939635357677],[0.9094083997233611,0.6613879270715354],[0.9094083997233611,0.992081890607303],[0.9094083997233611,1.3227758541430708],[0.9094083997233611,1.6534698176788385],[0.9094083997233611,1.984163781214606],[0.9094083997233611,2.3148577447503738],[0.9094083997233611,2.6455517082861415],[0.9094083997233611,2.9762456718219092],[0.9094083997233611,3.306939635357677],[0.9094083997233611,3.6376335988934447],[0.9094083997233611,3.968327562429212],[0.9094083997233611,4.29902152596498],[0.9094083997233611,4.6297154895007475],[0.9094083997233611,4.960409453036515],[0.9094083997233611,5.291103416572283],[0.9094083997233611,5.621797380108051],[0.9094083997233611,5.9524913436438185],[0.9094083997233611,6.283185307179586],[1.074755381491245,0],[1.074755381491245,0.3306939635357677],[1.074755381491245,0.6613879270715354],[1.074755381491245,0.992081890607303],[1.074755381491245,1.3227758541430708],[1.074755381491245,1.6534698176788385],[1.074755381491245,1.984163781214606],[1.074755381491245,2.3148577447503738],[1.074755381491245,2.6455517082861415],[1.074755381491245,2.9762456718219092],[1.074755381491245,3.306939635357677],[1.074755381491245,3.6376335988934447],[1.074755381491245,3.968327562429212],[1.074755381491245,4.29902152596498],[1.074755381491245,4.6297154895007475],[1.074755381491245,4.960409453036515],[1.074755381491245,5.291103416572283],[1.074755381491245,5.621797380108051],[1.074755381491245,5.9524913436438185],[1.074755381491245,6.283185307179586],[1.2401023632591288,0],[1.2401023632591288,0.3306939635357677],[1.2401023632591288,0.6613879270715354],[1.2401023632591288,0.992081890607303],[1.2401023632591288,1.3227758541430708],[1.2401023632591288,1.6534698176788385],[1.2401023632591288,1.984163781214606],[1.2401023632591288,2.3148577447503738],[1.2401023632591288,2.6455517082861415],[1.2401023632591288,2.9762456718219092],[1.2401023632591288,3.306939635357677],[1.2401023632591288,3.6376335988934447],[1.2401023632591288,3.968327562429212],[1.2401023632591288,4.29902152596498],[1.2401023632591288,4.6297154895007475],[1.2401023632591288,4.960409453036515],[1.2401023632591288,5.291103416572283],[1.2401023632591288,5.621797380108051],[1.2401023632591288,5.9524913436438185],[1.2401023632591288,6.283185307179586],[1.4054493450270127,0],[1.4054493450270127,0.3306939635357677],[1.4054493450270127,0.6613879270715354],[1.4054493450270127,0.992081890607303],[1.4054493450270127,1.3227758541430708],[1.4054493450270127,1.6534698176788385],[1.4054493450270127,1.984163781214606],[1.4054493450270127,2.3148577447503738],[1.4054493450270127,2.6455517082861415],[1.4054493450270127,2.9762456718219092],[1.4054493450270127,3.306939635357677],[1.4054493450270127,3.6376335988934447],[1.4054493450270127,3.968327562429212],[1.4054493450270127,4.29902152596498],[1.4054493450270127,4.6297154895007475],[1.4054493450270127,4.960409453036515],[1.4054493450270127,5.291103416572283],[1.4054493450270127,5.621797380108051],[1.4054493450270127,5.9524913436438185],[1.4054493450270127,6.283185307179586],[1.5707963267948966,0],[1.5707963267948966,0.3306939635357677],[1.5707963267948966,0.6613879270715354],[1.5707963267948966,0.992081890607303],[1.5707963267948966,1.3227758541430708],[1.5707963267948966,1.6534698176788385],[1.5707963267948966,1.984163781214606],[1.5707963267948966,2.3148577447503738],[1.5707963267948966,2.6455517082861415],[1.5707963267948966,2.9762456718219092],[1.5707963267948966,3.306939635357677],[1.5707963267948966,3.6376335988934447],[1.5707963267948966,3.968327562429212],[1.5707963267948966,4.29902152596498],[1.5707963267948966,4.6297154895007475],[1.5707963267948966,4.960409453036515],[1.5707963267948966,5.291103416572283],[1.5707963267948966,5.621797380108051],[1.5707963267948966,5.9524913436438185],[1.5707963267948966,6.283185307179586]];
let index1 = [[0,1,20],[21,20,1],[1,2,21],[22,21,2],[2,3,22],[23,22,3],[3,4,23],[24,23,4],[4,5,24],[25,24,5],[5,6,25],[26,25,6],[6,7,26],[27,26,7],[7,8,27],[28,27,8],[8,9,28],[29,28,9],[9,10,29],[30,29,10],[10,11,30],[31,30,11],[11,12,31],[32,31,12],[12,13,32],[33,32,13],[13,14,33],[34,33,14],[14,15,34],[35,34,15],[15,16,35],[36,35,16],[16,17,36],[37,36,17],[17,18,37],[38,37,18],[18,19,38],[39,38,19],[20,21,40],[41,40,21],[21,22,41],[42,41,22],[22,23,42],[43,42,23],[23,24,43],[44,43,24],[24,25,44],[45,44,25],[25,26,45],[46,45,26],[26,27,46],[47,46,27],[27,28,47],[48,47,28],[28,29,48],[49,48,29],[29,30,49],[50,49,30],[30,31,50],[51,50,31],[31,32,51],[52,51,32],[32,33,52],[53,52,33],[33,34,53],[54,53,34],[34,35,54],[55,54,35],[35,36,55],[56,55,36],[36,37,56],[57,56,37],[37,38,57],[58,57,38],[38,39,58],[59,58,39],[40,41,60],[61,60,41],[41,42,61],[62,61,42],[42,43,62],[63,62,43],[43,44,63],[64,63,44],[44,45,64],[65,64,45],[45,46,65],[66,65,46],[46,47,66],[67,66,47],[47,48,67],[68,67,48],[48,49,68],[69,68,49],[49,50,69],[70,69,50],[50,51,70],[71,70,51],[51,52,71],[72,71,52],[52,53,72],[73,72,53],[53,54,73],[74,73,54],[54,55,74],[75,74,55],[55,56,75],[76,75,56],[56,57,76],[77,76,57],[57,58,77],[78,77,58],[58,59,78],[79,78,59],[60,61,80],[81,80,61],[61,62,81],[82,81,62],[62,63,82],[83,82,63],[63,64,83],[84,83,64],[64,65,84],[85,84,65],[65,66,85],[86,85,66],[66,67,86],[87,86,67],[67,68,87],[88,87,68],[68,69,88],[89,88,69],[69,70,89],[90,89,70],[70,71,90],[91,90,71],[71,72,91],[92,91,72],[72,73,92],[93,92,73],[73,74,93],[94,93,74],[74,75,94],[95,94,75],[75,76,95],[96,95,76],[76,77,96],[97,96,77],[77,78,97],[98,97,78],[78,79,98],[99,98,79],[80,81,100],[101,100,81],[81,82,101],[102,101,82],[82,83,102],[103,102,83],[83,84,103],[104,103,84],[84,85,104],[105,104,85],[85,86,105],[106,105,86],[86,87,106],[107,106,87],[87,88,107],[108,107,88],[88,89,108],[109,108,89],[89,90,109],[110,109,90],[90,91,110],[111,110,91],[91,92,111],[112,111,92],[92,93,112],[113,112,93],[93,94,113],[114,113,94],[94,95,114],[115,114,95],[95,96,115],[116,115,96],[96,97,116],[117,116,97],[97,98,117],[118,117,98],[98,99,118],[119,118,99],[100,101,120],[121,120,101],[101,102,121],[122,121,102],[102,103,122],[123,122,103],[103,104,123],[124,123,104],[104,105,124],[125,124,105],[105,106,125],[126,125,106],[106,107,126],[127,126,107],[107,108,127],[128,127,108],[108,109,128],[129,128,109],[109,110,129],[130,129,110],[110,111,130],[131,130,111],[111,112,131],[132,131,112],[112,113,132],[133,132,113],[113,114,133],[134,133,114],[114,115,134],[135,134,115],[115,116,135],[136,135,116],[116,117,136],[137,136,117],[117,118,137],[138,137,118],[118,119,138],[139,138,119],[120,121,140],[141,140,121],[121,122,141],[142,141,122],[122,123,142],[143,142,123],[123,124,143],[144,143,124],[124,125,144],[145,144,125],[125,126,145],[146,145,126],[126,127,146],[147,146,127],[127,128,147],[148,147,128],[128,129,148],[149,148,129],[129,130,149],[150,149,130],[130,131,150],[151,150,131],[131,132,151],[152,151,132],[132,133,152],[153,152,133],[133,134,153],[154,153,134],[134,135,154],[155,154,135],[135,136,155],[156,155,136],[136,137,156],[157,156,137],[137,138,157],[158,157,138],[138,139,158],[159,158,139],[140,141,160],[161,160,141],[141,142,161],[162,161,142],[142,143,162],[163,162,143],[143,144,163],[164,163,144],[144,145,164],[165,164,145],[145,146,165],[166,165,146],[146,147,166],[167,166,147],[147,148,167],[168,167,148],[148,149,168],[169,168,149],[149,150,169],[170,169,150],[150,151,170],[171,170,151],[151,152,171],[172,171,152],[152,153,172],[173,172,153],[153,154,173],[174,173,154],[154,155,174],[175,174,155],[155,156,175],[176,175,156],[156,157,176],[177,176,157],[157,158,177],[178,177,158],[158,159,178],[179,178,159],[160,161,180],[181,180,161],[161,162,181],[182,181,162],[162,163,182],[183,182,163],[163,164,183],[184,183,164],[164,165,184],[185,184,165],[165,166,185],[186,185,166],[166,167,186],[187,186,167],[167,168,187],[188,187,168],[168,169,188],[189,188,169],[169,170,189],[190,189,170],[170,171,190],[191,190,171],[171,172,191],[192,191,172],[172,173,192],[193,192,173],[173,174,193],[194,193,174],[174,175,194],[195,194,175],[175,176,195],[196,195,176],[176,177,196],[197,196,177],[177,178,197],[198,197,178],[178,179,198],[199,198,179],[180,181,200],[201,200,181],[181,182,201],[202,201,182],[182,183,202],[203,202,183],[183,184,203],[204,203,184],[184,185,204],[205,204,185],[185,186,205],[206,205,186],[186,187,206],[207,206,187],[187,188,207],[208,207,188],[188,189,208],[209,208,189],[189,190,209],[210,209,190],[190,191,210],[211,210,191],[191,192,211],[212,211,192],[192,193,212],[213,212,193],[193,194,213],[214,213,194],[194,195,214],[215,214,195],[195,196,215],[216,215,196],[196,197,216],[217,216,197],[197,198,217],[218,217,198],[198,199,218],[219,218,199],[200,201,220],[221,220,201],[201,202,221],[222,221,202],[202,203,222],[223,222,203],[203,204,223],[224,223,204],[204,205,224],[225,224,205],[205,206,225],[226,225,206],[206,207,226],[227,226,207],[207,208,227],[228,227,208],[208,209,228],[229,228,209],[209,210,229],[230,229,210],[210,211,230],[231,230,211],[211,212,231],[232,231,212],[212,213,232],[233,232,213],[213,214,233],[234,233,214],[214,215,234],[235,234,215],[215,216,235],[236,235,216],[216,217,236],[237,236,217],[217,218,237],[238,237,218],[218,219,238],[239,238,219],[220,221,240],[241,240,221],[221,222,241],[242,241,222],[222,223,242],[243,242,223],[223,224,243],[244,243,224],[224,225,244],[245,244,225],[225,226,245],[246,245,226],[226,227,246],[247,246,227],[227,228,247],[248,247,228],[228,229,248],[249,248,229],[229,230,249],[250,249,230],[230,231,250],[251,250,231],[231,232,251],[252,251,232],[232,233,252],[253,252,233],[233,234,253],[254,253,234],[234,235,254],[255,254,235],[235,236,255],[256,255,236],[236,237,256],[257,256,237],[237,238,257],[258,257,238],[238,239,258],[259,258,239],[240,241,260],[261,260,241],[241,242,261],[262,261,242],[242,243,262],[263,262,243],[243,244,263],[264,263,244],[244,245,264],[265,264,245],[245,246,265],[266,265,246],[246,247,266],[267,266,247],[247,248,267],[268,267,248],[248,249,268],[269,268,249],[249,250,269],[270,269,250],[250,251,270],[271,270,251],[251,252,271],[272,271,252],[252,253,272],[273,272,253],[253,254,273],[274,273,254],[254,255,274],[275,274,255],[255,256,275],[276,275,256],[256,257,276],[277,276,257],[257,258,277],[278,277,258],[258,259,278],[279,278,259],[260,261,280],[281,280,261],[261,262,281],[282,281,262],[262,263,282],[283,282,263],[263,264,283],[284,283,264],[264,265,284],[285,284,265],[265,266,285],[286,285,266],[266,267,286],[287,286,267],[267,268,287],[288,287,268],[268,269,288],[289,288,269],[269,270,289],[290,289,270],[270,271,290],[291,290,271],[271,272,291],[292,291,272],[272,273,292],[293,292,273],[273,274,293],[294,293,274],[274,275,294],[295,294,275],[275,276,295],[296,295,276],[276,277,296],[297,296,277],[277,278,297],[298,297,278],[278,279,298],[299,298,279],[280,281,300],[301,300,281],[281,282,301],[302,301,282],[282,283,302],[303,302,283],[283,284,303],[304,303,284],[284,285,304],[305,304,285],[285,286,305],[306,305,286],[286,287,306],[307,306,287],[287,288,307],[308,307,288],[288,289,308],[309,308,289],[289,290,309],[310,309,290],[290,291,310],[311,310,291],[291,292,311],[312,311,292],[292,293,312],[313,312,293],[293,294,313],[314,313,294],[294,295,314],[315,314,295],[295,296,315],[316,315,296],[296,297,316],[317,316,297],[297,298,317],[318,317,298],[298,299,318],[319,318,299],[300,301,320],[321,320,301],[301,302,321],[322,321,302],[302,303,322],[323,322,303],[303,304,323],[324,323,304],[304,305,324],[325,324,305],[305,306,325],[326,325,306],[306,307,326],[327,326,307],[307,308,327],[328,327,308],[308,309,328],[329,328,309],[309,310,329],[330,329,310],[310,311,330],[331,330,311],[311,312,331],[332,331,312],[312,313,332],[333,332,313],[313,314,333],[334,333,314],[314,315,334],[335,334,315],[315,316,335],[336,335,316],[316,317,336],[337,336,317],[317,318,337],[338,337,318],[318,319,338],[339,338,319],[320,321,340],[341,340,321],[321,322,341],[342,341,322],[322,323,342],[343,342,323],[323,324,343],[344,343,324],[324,325,344],[345,344,325],[325,326,345],[346,345,326],[326,327,346],[347,346,327],[327,328,347],[348,347,328],[328,329,348],[349,348,329],[329,330,349],[350,349,330],[330,331,350],[351,350,331],[331,332,351],[352,351,332],[332,333,352],[353,352,333],[333,334,353],[354,353,334],[334,335,354],[355,354,335],[335,336,355],[356,355,336],[336,337,356],[357,356,337],[337,338,357],[358,357,338],[338,339,358],[359,358,339],[340,341,360],[361,360,341],[341,342,361],[362,361,342],[342,343,362],[363,362,343],[343,344,363],[364,363,344],[344,345,364],[365,364,345],[345,346,365],[366,365,346],[346,347,366],[367,366,347],[347,348,367],[368,367,348],[348,349,368],[369,368,349],[349,350,369],[370,369,350],[350,351,370],[371,370,351],[351,352,371],[372,371,352],[352,353,372],[373,372,353],[353,354,373],[374,373,354],[354,355,374],[375,374,355],[355,356,375],[376,375,356],[356,357,376],[377,376,357],[357,358,377],[378,377,358],[358,359,378],[379,378,359],[360,361,380],[381,380,361],[361,362,381],[382,381,362],[362,363,382],[383,382,363],[363,364,383],[384,383,364],[364,365,384],[385,384,365],[365,366,385],[386,385,366],[366,367,386],[387,386,367],[367,368,387],[388,387,368],[368,369,388],[389,388,369],[369,370,389],[390,389,370],[370,371,390],[391,390,371],[371,372,391],[392,391,372],[372,373,392],[393,392,373],[373,374,393],[394,393,374],[374,375,394],[395,394,375],[375,376,395],[396,395,376],[376,377,396],[397,396,377],[377,378,397],[398,397,378],[378,379,398],[399,398,379]];