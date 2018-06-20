let a = [
    0,0,0,
    0,0,0,
    0,0,0
    ];
    
let ledger = {
    chains:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        ]
};

let lc = ledger.chains;

for(let i=0;i<3;i++){
    for(let j=0;j<lc.length;j++){
        a[lc[i][j]] = "burn!";
    }
    console.log(a);
}
