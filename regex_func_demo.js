const func=require('./func.js');

console.log("Working Of various regex functions in nodejs\n");

const stringmatch = 'I love batman but I hate bats. I am also a good bowler but  not a good batsman';
const patternmatch = /(bat)+[a-zA-Z]+/g;
const outmatch=func.regexMatch(patternmatch,stringmatch,(error,output)=>{
    if(error){
       return error;
    }
    else{
        return output;
    }
})

const stringmatchall='I love batman but I hate bats';
const patternmatchall=/(bat)+[a-zA-Z]+/g;
const outmatchall=func.regexMatchAll(patternmatchall,stringmatchall,(error,output)=>{
    if(error){
       return error;
    }
    else{
        return output;
    }
})

const stringsearch = 'The capital of India New Delhi. Delhi is a union territory';
const patternsearch = /(Delhi)/;
const outsearch=func.regexSearch(patternsearch,stringsearch,(error,output)=>{
    if(error){
       return error;
    }
    else{
        return output;
    }
})

const stringreplace = 'My phone number is 579:467:8792:1234';
const outreplace=func.regexReplace(":","-",stringreplace,(error,output)=>{
    if(error){
       return error;
    }
    else{
        return output;
    }
})

const stringreplaceall = 'My phone number is 579:467:8792:1234';
const outreplaceall=func.regexReplaceAll(":","-",stringreplaceall,(error,output)=>{
    if(error){
       return error;
    }
    else{
        return output;
    }
})

Output={
    Output_Of_match : outmatch,
    Output_Of_matchall : outmatchall,
    Output_Of_search : outsearch,
    Output_Of_replace : outreplace,
    Output_Of_replaceall : outreplaceall

}

console.log(Output)


