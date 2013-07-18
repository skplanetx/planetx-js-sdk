본 SDK는 SK PlanetX 가 제공하는 서비스를 토대로 JavaScript 개발을 위한 라이브러리 성격의 SDK입니다.
planetxsdk.js는 jQuery (v.1.8.0)를 기반으로 개발되었으며,
One ID 서버와의 통신 및 인증을 수행하고 PlanetX 서버와의 통신을 수행합니다.


자세한 내용은 아래의 사이트를 참고해 주시길 바랍니다.
- SDK 설명 : https://developers.skplanetx.com/develop/doc/sdk/javascript-sdk/reference/
- Tutorial : https://developers.skplanetx.com/develop/doc/sdk/javascript-sdk/tutorial/


PlanetX에서 제공하는 JavaScript SDK는 planetxsdk.js 파일과 예제 파일들로 구성되어 있습니다.
examples폴더의 예제 파일들은 planetxsdk.js 를 사용하여
개발에 필요한 Sample code를 제공하고 있습니다.

파일 구조
- planetxsdk.js : planetx javascript sdk 파일입니다.
- examples : planetxsdk.js 를 사용한 간단한 예제 파일입니다.
	- index.html : 예제 페이지 입니다.
	- app.js : index.html 예제 파일의 서비스를 불러오기위한 예제 콜백 함수들로 이루어져있습니다

	아래의 3파일은 jQuery 프로젝트의 다른 링크로 대체될수있습니다.
	- jquery-1.8.0.js : 예제 페이지에서 사용하는 jquery 1.8.0 버전입니다.
	- jquery.mobile-1.3.1.min.js : 예제 파일에서 사용하는 jQuery Mobile 1.3.1 버전의 Minify JS 파일입니다.
	- jquery.mobile-1.3.1.min.css : 예제 파일에서 사용하는 jQuery Mobile 1.3.1 버전의 Minify CSS 파일입니다.
- README.md : 사용자 설명서

이슈 사항
Internet Explorer에서 정상 동작이 안 되는 경우,아래와 같이 옵션을 확인하셔야 합니다.
- 인터넷 옵션 -> 보안 -> 사용자 지정 수준 -> 도메인간 데이터 원본 엑세스 -> 확인 혹은 사용
