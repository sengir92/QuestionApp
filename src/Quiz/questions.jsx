import Cinseddi from '../pictures/cin-seddi.jpg';
import Pamuk from '../pictures/pamuk.jpg';
import Tarkan from '../pictures/tarkan.jpg';
import Fobi from '../pictures/fobi.jpg';
import Balik from '../pictures/balik.jpg';
import Bandira from '../pictures/bandira.jpg';
import Billboard from '../pictures/billboard.jpg';
import Parfum from '../pictures/parfum.jpg';
import Trex from '../pictures/trex.jpg';
import Mutluluk from '../pictures/mutluluk.jpg';



const questions = [
  {
    id:1,
    question: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
    answer: "Pirinç Unu",
    media: Cinseddi,
  },
  {
    id:2,
    question: "İlk Pamuk şekeri bulan kişinin mesleği nedir?",
    options: ["Gıda Mühendisi", "Diş Doktoru", "Ev Hanımı", "Güzellik Uzmanı"],
    answer: "Diş Doktoru",
    media: Pamuk,
  },
  {
    id:3,
    question:
      "Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamda bulunan kişi kimdir?",
    options: ["Gülben Ergen", "Hülya Avşar", "Harika Avcı", "Sevtap Parman"],
    answer: "Gülben Ergen",
    media: Tarkan,
  },
  {
    id:4,
    question: "Pteronofobi nedir?",
    options: [
      "Yeşil ışık yanar yanmaz korna çalacak korkusu",
      "Fakir kalma korkusu",
      "Taksi bulamama korkusu",
      "Kuş tüyüyle gıdıklanma korkusu",
    ],
    answer: "Kuş tüyüyle gıdıklanma korkusu",
    media: Fobi,
  },
  {
    id:5,
    question:
      "Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
    options: ["43", "78", "23", "99"],
    answer: "43",
    media: Balik,
  },
  {
    id:6,
    question:
      "90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
    options: ["Sezen Aksu", "Sibel Can", "Mustafa Sandal", "Bülent Ersoy"],
    answer: "Mustafa Sandal",
    media: Bandira,
  },
  {
    id:7,
    question:
      "Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
    options: ["Hande Yener", "Hadise", "Gülşen", "Simge"],
    answer: "Hadise",
    media: Billboard,
  },
  {
    id:8,
    question: "Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
    options: ["Gül Suyu", "Bal", "Gladyatör Teri", "Kan"],
    answer: "Gladyatör Teri",
    media: Parfum,
  },
  {
    id:9,
    question: "T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
    options: ["İnekler", "Tavuklar", "Timsahlar", "Köpekler"],
    answer: "Tavuklar",
    media: Trex,
  },
  {
    id:10,
    question:
      "Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
    options: ["Çerofobi", "Euphobia", "Felicifobia", "Mutluluk Korkusu"],
    answer: "Çerofobi",
    media: Mutluluk,
  },
];

export default questions;