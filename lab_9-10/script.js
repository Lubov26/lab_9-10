function validate(){
                
    var w=document.forms['form']['name'].value;
    var x=document.forms['form']['email'].value;
    var y=document.forms['form']['subject'].value;
    var z=document.forms['form']['message'].value;

    if (w.length==0){
        document.getElementById('form-name').innerHTML='*данное поле необходимо заполнить';
        return false;
        }
        
        if (x.length==0){
        document.getElementById('form-email').innerHTML='*данное поле необходимо заполнить';
        return false;
        }
        
        at=x.indexOf("@");
        dot=x.indexOf(".");
        
        if (at<1 || dot <1){
        document.getElementById('form-email').innerHTML='*некорректный email';
        return false;
        }

        if (y.length==0){
        document.getElementById('form-subject').innerHTML='*данное поле необходимо заполнить';
        return false;
        }
        
        if (z.length==0){
        document.getElementById('messagef').innerHTML='*данное поле необходимо заполнить';
        return false;
        }
    
        if (!(w.length==0 || x.length==0 || y.length==0 || z.length==0)) {
            let data = {
                name: w.value,
                email: x.value,
                subject: y.value,
                message: z.value
            }
            sendToServer(data);
        }
    }

function sendToServer(data) {
    let url = "http://localhost:3000";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.text())
        .then((text) => {
            alert(text);
        });
} 