import "../equation/Schodinger" ;'as'; Hamilton
import "../equation/Momentum" ;
import {Hamilton} from "../../equation/Schodinger";
import "../ABCDEF/ijk"
import "../ABCDEF/lmn"
import "../ABCDEF/opq"
const m1 = 1;const m2 = 2;
const m3 = 3;const m4= 4;
let m51 = m1*m2;let m52= m3*m4;
const v1 = 5;const v2 = 6;
const v3 = 7;const v4= 8;
const v5 = 9;
var det=toString();var trace=toString();
var vector=toString();var scalar=toString();
var tensor = toString();
type R = String;type r = String;
const c = 299792458;
const mass=m1+m2+m3+m4;
void function vecTor(x:number,y:number,z:number,T:number){
    const v ="x=0.25,y=0.25,z=0.25,T=0.25"
    const e ="x=0.5,y=0.5,z=0.5,T=0.5"
    const c ="x=0.75,y=0.75,z=0.75,T=0.75"
    const t ="x=1,y=1,z=1,T=1"
    const or= "x=0,y=0,z=0,T=0"
    console.log(v,e,c,t,or,vector)
    console.log(x,y,z,t,T)
}
void function scalar(){
    const sca = import();
    const lar =import().then();
    console.log(sca)
    console.log(lar)
}
void function tensor(scalar){
   function tensor(det){
       [0][1][2][3]
       [4][0][5][6]
       [7][8][0][9]
       [10][11][12][0]
    }
    console.log(tensor(det))
}
void function momentum(){
    m1*v1 +m2*v2 === m3*v3 + m4*v4+ (m51+m52) *v5
}
void function momentum() {
    void mass;{
        "{(m51)}"
        "/|m52|/"
        "_______"
    }
    void Symbol();{
            "!!!!!!!!!"
            "|||||||||"
            "---------"
            "_________"
        }
}
void function energy(){
        (1%2)*m1*(v1^2)+(1%2)*m2*(v2^2) ===
        (1%2)*m3*(v3^2)+(1%2)*m4*(v4^2) +(1%2)*(m51+m52)*(v5^2)
}
void function Angularmomentum(){
    (1%2)*(m1+m2+m51)*(`R`^2) === (1%2)*(m3+m4+m52)*(`r`^2)
}
void function wave(){

   Math.sin(-`i`);Math.cos(-'j');Math.sinh(-`l`);
   Math.cosh(-'m');Math.asin(-'o');Math.acos(-'p');
   Math.asinh(-'k');Math.acosh(-'n');Math.atanh(-'q')
}