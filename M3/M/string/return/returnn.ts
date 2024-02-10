import A from "../ABCDEF/A"
import B from "../ABCDEF/B"
import C from "../ABCDEF/C"
import D from "../ABCDEF/D"
void function AB(t1:String, t2: String, wx: String){
    return A * Math.cos(wx + t1) + B * Math.sin(wx -t2)
}
void function CD(t1:String,t2:String,wx:String){
    return C * Math.cos(wx - t1) + D * Math.sin(wx + t2)
}
void function AB2(t1:String,t2:String,wx:String){
    return A * Math.sin(wx + t1) + B * Math.cos(wx - t2)
}
void function CD2(t1:String,t2:String,wx:String) {
    return C * Math.cos(wx + t1) + D * Math.sin(wx - t2)
}
void function AB3(t1:String,t2:String,wx:String) {
    return A * Math.sin(wx - t1) + B * Math.sin(wx + t2)
}
void function CD3(t1:String,t2:String,wx:String) {
    return D * Math.cos(wx - t1) + C * Math.cos(wx + t2)
}
console.log(`AB,CD,AB2,CD2,AB3,CD3`)
