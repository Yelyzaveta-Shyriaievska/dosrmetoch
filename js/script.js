function sam(){
	let solo=document.getElementById('solo')
	let cour=document.getElementById('cour')
	let solo_block=document.getElementById('solo_block')
	let cour_block=document.getElementById('cour_block')
	let solo_img=document.getElementById('solo_img')
	let cour_img=document.getElementById('cour_img')

	solo.classList.add('active')
	cour.classList.remove('active')

	cour_img.src="img/image_20.png"
	solo_img.src="img/image_26.png"

	solo_block.classList.add('block')
	solo_block.classList.remove('hide')

	cour_block.classList.remove('block')
	cour_block.classList.add('hide')
}
function nesam(){
	let solo=document.getElementById('solo')
	let cour=document.getElementById('cour')
	let solo_block=document.getElementById('solo_block')
	let cour_block=document.getElementById('cour_block')
	let solo_img=document.getElementById('solo_img')
	let cour_img=document.getElementById('cour_img')

	cour.classList.add('active')
	solo.classList.remove('active')

	cour_img.src="img/image_28.png"
	solo_img.src="img/image_22.png"

	cour_block.classList.add('block')
	cour_block.classList.remove('hide')

	solo_block.classList.remove('block')
	solo_block.classList.add('hide')
}
function one(){
	let btn1=document.getElementById('kr')
	let btn2=document.getElementById('kiev')
	let btn3=document.getElementById('harkov')
	let btn4=document.getElementById('livov')
	let btn5=document.getElementById('ivan')



	btn1.classList.add('active')
	btn2.classList.remove('active')
	btn3.classList.remove('active')
	btn4.classList.remove('active') 
	btn5.classList.remove('active')


	firstPoint='ул.Кропивницкого, 29в'
	secondPoint='просп.Победы, 41а'
	thirdPoint='просп.Южный, 17, кв. 83'
	fouthPoint='ул.Эдуарда Фукса, 41'
	fivtthPoint='просп.Попеды, 32'
	sixthPoint='просп.Мира, 31'
	seventhPoint='ул.Адмирала Головко, 14'
	eigthPoint='ул.Соборности, 48'

	let points=[firstPoint,secondPoint,thirdPoint,fouthPoint,fivtthPoint,sixthPoint,seventhPoint,eigthPoint]
	let point_btn=document.querySelectorAll('.point')
	for(let i=0; i<point_btn.length;i++){
		point_btn[i].value=points[i]
	}
}
function two(){

	let btn1=document.getElementById('kr')
	let btn2=document.getElementById('kiev')
	let btn3=document.getElementById('harkov')
	let btn4=document.getElementById('livov')
	let btn5=document.getElementById('ivan')



	btn2.classList.add('active')
	btn1.classList.remove('active')
	btn3.classList.remove('active')
	btn4.classList.remove('active') 
	btn5.classList.remove('active')




	let firstPoint='ул.Пироговский путь, 135'
	let secondPoint='ул.Везховинная, 69'
	let thirdPoint='ул.Василия Жуковского'
	let fouthPoint='ул.Пшеничная, 4а'
	let fivtthPoint='ул.Вербовая, 24'
	let sixthPoint='ул.Радужная, 24А'
	let seventhPoint='ул. Луценко, 6'
	let eigthPoint='ул.Семьи Сосниных, 7а'

	let points=[firstPoint,secondPoint,thirdPoint,fouthPoint,fivtthPoint,sixthPoint,seventhPoint,eigthPoint]
	let point_btn=document.querySelectorAll('.point')
	for(let i=0; i<point_btn.length;i++){
		point_btn[i].value=points[i]
	}
}
function three(){

	let btn1=document.getElementById('kr')
	let btn2=document.getElementById('kiev')
	let btn3=document.getElementById('harkov')
	let btn4=document.getElementById('livov')
	let btn5=document.getElementById('ivan')


	btn3.classList.add('active')
	btn1.classList.remove('active')
	btn2.classList.remove('active')
	btn4.classList.remove('active')
    btn5.classList.remove('active')


	let firstPoint='Московський проспект, 259'
	let secondPoint='проспект Науки, 48'
	let thirdPoint=' Льва Ландау, 46'
	let fouthPoint='просп. Науки (ран. Ленина), 39а'
	let fivtthPoint='Московський проспект, 232А'
	let sixthPoint='ул. Танкопия, 25'
	let seventhPoint='проспект Тракторобудівників, 86/137'
	let eigthPoint='ул. Чернишевская, 1'

	let points=[firstPoint,secondPoint,thirdPoint,fouthPoint,fivtthPoint,sixthPoint,seventhPoint,eigthPoint]
	let point_btn=document.querySelectorAll('.point')
	for(let i=0; i<point_btn.length;i++){
		point_btn[i].value=points[i]
	}
}
function four(){

	let btn1=document.getElementById('kr')
	let btn2=document.getElementById('kiev')
	let btn3=document.getElementById('harkov')
	let btn4=document.getElementById('livov')
	let btn5=document.getElementById('ivan')




	btn4.classList.add('active')
	btn1.classList.remove('active')
	btn2.classList.remove('active')
    btn3.classList.remove('active')
	btn5.classList.remove('active')



	let firstPoint='Городоцкая, 359'
	let secondPoint='ул. Пластова, 7'
	let thirdPoint=' ул. Угорская, 22 (заезд с ул. Луганской)'
	let fouthPoint='ул. Данилишина, 6'
	let fivtthPoint=' ул. Гринченко, 2а'
	let sixthPoint='ул. Кульпарковская, 1425'
	let seventhPoint='ул. Городоцкая, 120'
	let eigthPoint='ул. Словацкого, 5'

	let points=[firstPoint,secondPoint,thirdPoint,fouthPoint,fivtthPoint,sixthPoint,seventhPoint,eigthPoint]
	let point_btn=document.querySelectorAll('.point')
	for(let i=0; i<point_btn.length;i++){
		point_btn[i].value=points[i]
	}
}
function five(){

	let btn1=document.getElementById('kr')
	let btn2=document.getElementById('kiev')
	let btn3=document.getElementById('harkov')
	let btn4=document.getElementById('livov')
    let btn5=document.getElementById('ivan')

	btn5.classList.add('active')
	btn1.classList.remove('active')
	btn2.classList.remove('active')
    btn3.classList.remove('active')
	btn4.classList.remove('active')



	let firstPoint='ул. Максимовича, 8'
	let secondPoint='ул. Вовчинецкая, 26'
	let thirdPoint=' ул. Железнодорожная, 4'
	let fouthPoint=' ул. Независимости, 146'
	let fivtthPoint='  ул. Вячеслава Чорновола, 3'
	let sixthPoint=' ул. Миколайчука, 30'
	let seventhPoint=' ул. Сорохтея, 41'
	let eigthPoint='ул. Набережная им. В. Стефаника, 42'

	let points=[firstPoint,secondPoint,thirdPoint,fouthPoint,fivtthPoint,sixthPoint,seventhPoint,eigthPoint]
	let point_btn=document.querySelectorAll('.point')
	for(let i=0; i<point_btn.length;i++){
		point_btn[i].value=points[i]
	}
}
function one_1(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn11.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_2(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn21.classList.add('active')
	btn11.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_3(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn33.classList.add('active')
	btn21.classList.remove('active')
	btn11.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_4(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn44.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn11.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_5(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn55.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn11.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_6(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn66.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn11.classList.remove('active')
	btn77.classList.remove('active')
	btn88.classList.remove('active')
}
function one_7(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn77.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn11.classList.remove('active')
	btn88.classList.remove('active')
}
function one_8(){
	let btn11=document.getElementById('one_1')
	let btn21=document.getElementById('one_2')
	let btn33=document.getElementById('one_3')
	let btn44=document.getElementById('one_4')
    let btn55=document.getElementById('one_5')
	let btn66=document.getElementById('one_6')
	let btn77=document.getElementById('one_7')
	let btn88=document.getElementById('one_8')

	btn88.classList.add('active')
	btn21.classList.remove('active')
	btn33.classList.remove('active')
    btn44.classList.remove('active')
	btn55.classList.remove('active')
    btn66.classList.remove('active')
	btn77.classList.remove('active')
	btn11.classList.remove('active')
}
function kart(){
	let karta_1=document.getElementById('karta_1')
	let lichnymy_1=document.getElementById('lichnymy_1')
	let karta=document.getElementById('karta')
	let lichnymy=document.getElementById('lichnymy')

	karta_1.classList.add('active')
	lichnymy_1.classList.remove('active')

	karta.classList.add('block')
	karta.classList.remove('hide')

	lichnymy.classList.remove('block')
	lichnymy.classList.add('hide')
}
function nekart(){
	let karta_1=document.getElementById('karta_1')
	let lichnymy_1=document.getElementById('lichnymy_1')
	let karta=document.getElementById('karta')
	let lichnymy=document.getElementById('lichnymy')

	lichnymy_1.classList.add('active')
	karta_1.classList.remove('active')

	lichnymy.classList.add('block')
	lichnymy.classList.remove('hide')

	karta.classList.remove('block')
	karta.classList.add('hide')
}
function send(){
	let temp=document.querySelector('.block1.active')
	let sposob
	if(temp){
		sposob=document.getElementById('solo').innerText
	}
   else{
	   sposob=document.getElementById('cour').innerText
   }




	let town=document.querySelector('.btn.active').value
	let point=document.querySelector('.point.active').value

   

	
	let temp_1=document.querySelector('.method1.active')
	let sposob_1
	if(temp_1){
		sposob_1=document.getElementById('karta_1').value
	}
   else{
	   sposob_1=document.getElementById('lichnymy_1').value
   }
	


	if(document.getElementById('sec5')){
		return
	}

	let phone=document.getElementById('telephone').value
	let data=document.getElementById('data').value
	let data_1=document.getElementById('data_1').value
	let time=document.getElementById('vrema').value
	let address_1 = document.getElementById('addres_1').value

	let card1=document.getElementById('number_1').value
	let card2=document.getElementById('number_2').value
	let card3=document.getElementById('number_3').value
	let card4=document.getElementById('number_4').value
	let change=document.getElementById('change').value

	if(sposob=="Самовывоз"){
		let parents=document.getElementById('sec4')
    let create=document.createElement('div')
		create.innerHTML=`
	<div class="sec5" id="sec5">
	<h1>Спасибо за ваш заказ</h1>
	<p>Ниже представленна введенная вами информация:</p>
	<hr>
	<p>Вариант доставки: ${sposob}</p>
    <p>Город доставки: ${town}</p>
	<p>Точка выдачи: ${point}</p>
	
	<hr>
	<p>Способ оплаты: ${sposob_1}</p>
	<p>Номер карты: ${card1}${card2}${card3}${card4}</p>
	
	<hr>
	
    <p>Ожидаемоя дата доставки:${data} ${data_1}</p>
    <input type="button" class="active_1" value="OK" onclick="ok()">
	</div>`
	parents.appendChild(create)
	}


	else{
	let parents=document.getElementById('sec4')
    let create=document.createElement('div')
	create.innerHTML=`
	<div class="sec5" id="sec5">
	<h1>Спасибо за ваш заказ</h1>
	<p>Ниже представленна введенная вами информация:</p>
	<hr>
	<p>Вариант доставки: ${sposob}</p>

	<p>Адресс: ${address_1} </p>
	<hr>
	<p>Способ оплаты:</p>
	<p>Номер карты: ${card1}${card2}${card3}${card4}</p>
	<p>Подготовить сдачу c: ${change} грн</p>
	<hr>
	<p>Номер телефона: ${phone}</p>
    <p>Ожидаемоя дата доставки:${data} ${data_1}</p>
    <p>Ожидаемое время доставки: ${time}</p>
    <input type="button" class="active_1" value="OK" onclick="ok()">
	</div>`
	parents.appendChild(create)}

}
 var show=function(state){
	document.getElementById('sec4').style.display=state;
	document.getElementById('filter').style.display=state;
}
  function ok(){
	sec4.style.display ="none";
	filter.style.display = "none";
  }
    let card1=document.getElementById('number_1')
	let card2=document.getElementById('number_2')
	let card3=document.getElementById('number_3')
	let card4=document.getElementById('number_4')


	card1.oninput=function(){
		if(card1.value.length==4){
			card2.focus()
		}		
	}
	card2.oninput=function(){
		if(card2.value.length==4){
			card3.focus()
		}		
	}
	card3.oninput=function(){
		if(card3.value.length==4){
			card4.focus()
		}		
	}
