```base uri:https://quiz-app9.onrender.com/``

CryptQuiz API Dökümantasyonu
Bu dökümantasyon, Proje Adı'nın API'sinin kullanımını açıklamaktadır. API, kullanıcılar ve quizlerle ilgili temel işlevleri destekler.

Ana Sayfa
URL: /home
Metod: GET
Açıklama: Servis sağlayıcısının doğru çalıştığını kontrol etmek için kullanılır.


Kullanım
GET /home
Yanıt
Service provider is working properly!


Kullanıcılar (User) API
Tüm Kullanıcıları Listeleme
URL: /user
Metod: GET
Açıklama: Tüm kullanıcıları listeler.

GET /user
Yanıt
Başarılı bir yanıt, tüm kullanıcıları içeren bir JSON dizisi döner.


Kullanıcıyı ID ile Alma
URL: /user/:id
Metod: GET
Açıklama: Belirli bir kullanıcıyı ID'ye göre alır.
GET /user/1


Yeni Kullanıcı Oluşturma
URL: /user/create
Metod: POST
Açıklama: Yeni bir kullanıcı oluşturur.
Gerekli datalar:

wallet pub key-->zorunlu
username
profile
stats


Quizler (Quiz) API
Tüm Quizleri Listeleme
URL: /quiz
Metod: GET
Açıklama: Tüm quizleri listeler.
Örnek Kullanım
http
Copy code
GET /quiz
Yanıt
Başarılı bir yanıt, tüm quizleri içeren bir JSON dizisi döner.


Yeni Quiz Oluşturma
URL: /quiz/create
Metod: POST
Açıklama: Yeni bir quiz oluşturur.
Örnek Kullanım

POST /quiz/create


Content-Type: application/json

{
  "title": "General Knowledge Quiz",
  "questions": [
    "What is the capital of France?",
    "How many continents are there in the world?"
  ]
}
Yanıt
Başarılı bir yanıt, oluşturulan quizin bilgilerini içeren bir JSON nesnesi döner.
