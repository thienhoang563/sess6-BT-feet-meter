function FeetConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputMeter").innerHTML = 3.279 * valNum;
}

function MeterConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFeet").innerHTML = valNum * 0.305;

}