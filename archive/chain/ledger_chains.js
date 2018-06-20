process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
let a = [
    0,0,0,
    "red","red","red",
    0,0,0
    ];
    
let w = 3;
let h = 3;
let n = 6;
let arrs = [];

let ledger = {
    chains:[]
};

for(let i = 0;i<w;i++){
    if(a[n+1] === a[n]){
        arrs.push(n+i);
    }
}

console.log(arrs)


/*

let ledger = {
    chains:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        ]
};

*/
/*
let lc = ledger.chains;

for(let i=0;i<3;i++){
    for(let j=0;j<lc.length;j++){
        a[lc[i][j]] = "burn!";
    }
    console.log(a);
}
*/
