//사이트 링크를 누리기 전에 사이트링크를 여기에 입력해서 악성 사이트인지 알아보세요!
//악성사이트라면 열리지 않고 악성사이트가 아니라면 사이트가 열린답니다!!
//사이트 신고 받습니다!! 계속해서 업데이트할게요^^ 현재 제가 피해를 당한 사이트는 전부 추가하였습니다.
const arr = ['https://blow.ga/vitamin303', 'https://blow.ga/vitamin303/', 'https://playentry.org/ds#!/free/5f6336272dea1a00e6cffb42?category=free&rows=20&title=&page=1&currentPage=1&sort=created&isOwnerView=false&search_title=%27,%27https://blow.ga/울프나쁨%27,%27https://blow.ga/울프나쁨/%27,%27https://www.fake.r-e.kr/%27,%27https://www.fake.r-e.kr%27,%27http://naver.me/5xNPYqk3%27,%27http://naver.me/5xNPYqk3/%27,%27https://qops.xyz/RGmLjE%27,%27https://blow.ga/20725%27,%27https://url.kr/AeMji8%27,%27https://blow.ga/vitaminface%27,%27https://www.itemmania.com%27,%27https://itemmania.com%27,%27https://qops.xyz/pgcIe7%27,%27https://blow.ga/sd'];
alert("안전 사이트열기 프로그램(v.1.4)을 실행합니다.")
let m1 = prompt('열고 싶은 사이트의 링크를 입력해주세요. https,http까지 입력해주세요')
for(let index in arr){
if((arr[index])==m1) {o=index;if(index >1000){alert("안전한 사이트입니다.")}else{console.log("악성 사이트 방지 프로그램을 다시 시작하려면 F5를 눌러주세요.");}};
};let WARNING = false;
arr.forEach(e => {
WARNING = WARNING || e == m1
})
if(WARNING) alert("본 사이트는 악성사이트입니다. 접근이 차단되었습니다.")
else {let m2 = confirm("안전한 사이트로 추정되지만, 단축링크라면 당신을 속일수도 있습니다. 창을 여는것에 동의하시나요?");if(m2){open(m1)}else{alert("어쩌면 잘 생각한걸지도 몰라요.")};console.log("악성 사이트 방지 프로그램을 다시 시작하려면 F5를 눌러주세요.")}
