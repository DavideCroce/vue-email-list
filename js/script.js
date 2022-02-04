console.log('VUE OK', Vue);

Vue.config.devtools = true;

const rndEmails = new Vue ({
    el:'#root',
    data: {
        emails: [],
    },
    methods: {
        rEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            then(res => {
                this.emails.push(res.data.response);
            })
        },
        rEmails(numb){
            for (i = 0; i < numb; i++){
                const mail = this.rEmail();
                this.emails.push(mail)
            }
        },
        numbEmails(){
            this.rEmails(10);
        }
    }
})