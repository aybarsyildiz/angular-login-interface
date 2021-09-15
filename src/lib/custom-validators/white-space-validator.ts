import { FormControl } from "@angular/forms";


export function WhiteSpaceValidator(control:FormControl) {

    let result = false;

    control.value.toString().replace(/\s/g,"") === control.value.toString() ? result=true : result = false;





    return result ? null : {whitespace: true};
    
    
    
};