var fs = require('fs');
const OpenFile = (fileName,callback)=>{
    
   
    try {  
         var data = fs.readFileSync(fileName, 'utf8');
        return callback(undefined,data.toString()); 
    } catch(e) {
        return callback('File not Found',undefined);

    }
}

const regexMatch = (pattern,file,callback)=>{

    if(!pattern){
        return callback("Enter a pattern",undefined)
    }
    else if(!file){
        return callback("Enter a valid text",undefined)
    }
    else{
        return callback(undefined,file.match(pattern));
    }
    
}


const regexMatchAll = (pattern,file,callback)=>{
    if(!pattern){
        return callback("Enter a pattern",undefined)
    }
    else if(!file){
        return callback("Enter a valid text",undefined)
    }
    else{
        return callback(undefined,Array.from(file.matchAll(pattern)));
    }
    
}


const regexSearch = (pattern,file,callback)=>{
    if(!pattern){
        return callback("Enter a pattern",undefined)
    }
    else if(!file){
        return callback("Enter a valid text",undefined)
    }
    else{
        return callback(undefined,file.search(pattern));
    }  
   
}

const regexReplace = (from,to,file,callback)=>{
    if(!from){
        return callback("Enter a string existing strinig",undefined)
    }
    else if(!file){
        return callback("Enter a valid text",undefined)
    }
    else{
        return callback(undefined,file.replace(from, to));
    }  
    
}

const regexReplaceAll = (from,to,file,callback)=>{
    if(!from){
        return callback("Enter a string existing strinig",undefined)
    }
    else if(!file){
        return callback("Enter a valid text",undefined)
    }
    else{
        return callback(undefined,file.replaceAll(from, to));
    }  
    
}

module.exports={
    OpenFile,
    regexMatch,
    regexMatchAll,
    regexSearch,
    regexReplace,
    regexReplaceAll
}
