export default function validateInfo(values){
    let errors= {}

    if(!values.username.trim()){
        errors.username = alert("아이디를 입력하세요")
    }

    if(!values.email){
        errors.email = alert("이메일을 입력하세요")

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.text(values.email)){
        errors.email=alert("올바른 이메일 형식을 입력하세요")
    } 
    if(!values.password){
        errors.password=alert("비밀번호를 입력하세요")
    }else if (values.password.length <8 ){
        errors.password="비밀번호를 8자 이상으로 설정해주세요"
    }

    if(!values.password2){
        errors.password2=alert("비밀번호를 입력하세요")
    }else if (values.password2!==values.password){
        errors.password2=alert("비밀번호가 일치하지 않습니다.")
    }
    return errors;
}