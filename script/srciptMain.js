const body = document.getElementById('body');
//header
const btnMenu = document.getElementById('btnMenu');
const btnContact = document.getElementById('btnContact');
const poligon = document.getElementById('poligon');
//home
const homeHeader = document.getElementById('homeHeader');
//subscribe
const subscribe = document.getElementById('subscribe');
const subscribeHeader = document.getElementById('subscribeHeader');
const textGroup_1 = document.getElementById('textGroup_1');
const textGroup_2 = document.getElementById('textGroup_2');
const btnSubscribe = document.getElementById('btnSubscribe');
//features
const features = document.getElementById('features');
const featureHeader2 = document.getElementById('featureHeader2');
//testimonials
const testimonialsHeader = document.getElementById('testimonialsHeader');
const testimoialsP = document.getElementById('testimoialsP');
const profiles = document.querySelectorAll('.profile');
//rectangle
const rectangle1 = document.getElementById('rectangle1');
const rectangleHeader = document.getElementById('rectangleHeader');
const rectangleText = document.getElementById('rectangleText');
const card = document.querySelectorAll('.card');
//footer
const mainBoxText = document.getElementById('mainBoxText');
const imgFooter = document.getElementById('imgFooter');
function switchingTheme(){
    //header
    const buttons = btnMenu.querySelectorAll('button');
    //features
    const featuresHeader3 = features.querySelectorAll('h3');
    const featuresText = features.querySelectorAll('p');
    //footer
    const footerHeader5 = mainBoxText.querySelectorAll('h5');
    const footerText = mainBoxText.querySelectorAll('p');

    function lightTheme(){
        body.style.backgroundColor = "#FFFFFF";
        //header
        buttons.forEach(button => {
            button.style.color = '#343A40'; 
        });
        btnContact.style.backgroundColor = "#FFFFFF";
        btnContact.style.color = "#EF5B59";
        poligon.src = 'img/polygon.svg';    
        //home
        homeHeader.style.color = "#343A40";
        //subscribe
        subscribe.style.backgroundColor = "#F4F7FE";
        subscribeHeader.style.color = "#343A40";
        textGroup_1.style.color = "#757575";
        textGroup_2.style.color = "#343A40";
        btnSubscribe.style.backgroundColor = "#EF5B59";
        //features
        featureHeader2.style.color = "#343A40";
        featuresHeader3.forEach(h3 => {
            h3.style.color = "#343A40"
        })
        featuresText.forEach(p => {
            p.style.color = "#757575"
        })
        //testimonials
        testimonialsHeader.style.color = "#343A40";
        testimoialsP.style.color = "#757575";
        profiles.forEach(profile => {
            const title = profile.querySelector('h4');
            const paragraph = profile.querySelector('p');
            title.style.color = '#343A40'; 
            paragraph.style.color = '#757575'; 
        });
        //rectangle
        rectangle1.style.backgroundColor = "#F4F7FE";
        rectangleHeader.style.color = "#000000";
        rectangleHeader.innerText = "How Much Does it Cost"
        rectangleText.style.color = "#757575";
        rectangleText.innerText = "Honest pricing, no surprises."
        card.forEach(card => {
            const button = card.querySelector('button');
            button.style.backgroundColor = "#FFFFFF";
            button.style.color = "#EF5B59"
        })
        //footer
        footerHeader5.forEach(h5 => {
            h5.style.color = "#343A40"
        })
        footerText.forEach(p => {
            p.style.color = "#757575"
        })
        imgFooter.style.display = "block";

    };
    function nightTheme(){
        body.style.backgroundColor = "#343A40";
        //header
        buttons.forEach(button => {
            button.style.color = '#F4F7FE'; 
        });
        btnContact.style.backgroundColor = "#EF5B59";
        btnContact.style.color = "#F4F7FE";
        poligon.src = 'img/polygon1.svg';
        //home
        homeHeader.style.color = "#F4F7FE";
        //subscribe
        subscribe.style.backgroundColor = "#EF5B59";
        subscribeHeader.style.color = "#F4F7FE";
        textGroup_1.style.color = "#FFFFFF";
        textGroup_2.style.color = "#F4F7FE";
        btnSubscribe.style.backgroundColor = "#343A40";
        //features
        featureHeader2.style.color = "#F4F7FE";
        featuresHeader3.forEach(h3 => {
            h3.style.color = "#F4F7FE"
        })
        featuresText.forEach(p => {
            p.style.color = "#F4F7FE"
        })
        //testimonials
        testimonialsHeader.style.color = "#F4F7FE";
        testimoialsP.style.color = "#F4F7FE";
        profiles.forEach(profile => {
            const title = profile.querySelector('h4');
            const paragraph = profile.querySelector('p');
            title.style.color = '#F4F7FE'; 
            paragraph.style.color = '#F4F7FE'; 
        });
        //rectangle
        rectangle1.style.backgroundColor = "#DE4A46";
        rectangleHeader.style.color = "#F4F7FE";
        rectangleHeader.innerText = "Pricing";
        rectangleText.style.color = "#F4F7FE";
        rectangleText.innerText = "Honest pricing, no surprises."
        card.forEach(card => {
            const button = card.querySelector('button');
            button.style.backgroundColor = "#757575";
            button.style.color = "#F4F7FE"
        })
        //footer
        footerHeader5.forEach(h5 => {
            h5.style.color = "#F4F7FE"
        })
        footerText.forEach(p => {
            p.style.color = "#F4F7FE"
        })
        imgFooter.style.display = "none";
    };

    document.getElementById('toggle').addEventListener('change', function() {
        if (this.checked) {
            nightTheme()
        } else {
            lightTheme()
        }
    });
}
switchingTheme()