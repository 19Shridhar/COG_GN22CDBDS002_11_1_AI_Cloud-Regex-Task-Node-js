const func=require('./func.js');

const out=func.OpenFile('titanic.txt',(error,file)=>{
    if(error){
       return error;
    }
    else{
        return file;
    }
})


if (out==='File not Found')
{
    console.log('Please Enter a valid file');
}
else{
    console.log('Here is the regex operations on Titatic text file using callbacks\n');
    console.log("\nMatching ticket with class first or second");
    pattern = new RegExp('(Ticket: (First|Second))','g');
    const result=func.regexMatch(pattern,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result);

    console.log("\nMatching all two dighit number");
    pattern1 = new RegExp('( [0-9][0-9])','g');
    const result1=func.regexMatch(pattern1,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result1);

    console.log("\nMatching the price of tickets");
    pattern2 = new RegExp('(Price: [^0-9A-Za-z] ..)','g');
    const result2=func.regexMatch(pattern2,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result2);

    console.log("\nMatching numbers in file");
    pattern3 = new RegExp('([0-9][0-9]?.[0-9]*)','g');
    const result3=func.regexMatch(pattern3,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result3);

    console.log("\nFinding all words in the file");
    pattern4 = new RegExp('([a-zA-Z]+[ :])','g');
    const result4=func.regexMatch(pattern4,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result4);

    console.log("\nFind all usd numbers");
    pattern5 = /\$ [0-9]+\.[0-9]+/g;
    const result5=func.regexMatch(pattern5,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result5);

    console.log("\nFind all the high-price tickets");
    pattern6 = /\$ [0-9][0-9][0-9]+\.[0-9]+/g;
    const result6=func.regexMatch(pattern6,out,(error,output)=>{
        if(error){
           return error;
        }
        else{
            return output;
        }
    })
    console.log(result6)
}

