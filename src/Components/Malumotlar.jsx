import React from 'react';
import tashImage from "../assets/tashkilot.jpg";

const Malumotlar = () => {
  return (
    <div className='malumotlar'>

        <div className="qoidalar">
            <h1>Umumiy Qoidalar</h1>
            <div className="line"></div>
            <div className="qoidalar-jamlami">
                <section>
                    <h1>1</h1>
                    <div className="blackCover"></div>
                    <p>
                        Ushbu nizom Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasi (keyingi urinlarda boshqarma deb ataladi) maqomi, asosiy vazifalari, funksiyalari vs huquqlarini hamda faoliyatining tashkiliy asoslarini belgilaydi.
                    </p>
                </section>
                <section>
                    <h1>2</h1>
                    <div className="blackCover"></div>
                    <p>
                        Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasi "O'zbekiston respublikasi prezidentining "O'zbekiston respublikasi Suv xujaligi vazirligi faoliyatini takomillashtirish bo'yicha qushimcha chora-tadbirlar tug'risidagi" 2018 yil 29 Noyabirdagi PQ-4039-son qarori hamda" O'zbekiston respublikasi Suv Hujaligi vazirligi 2018 yil 3 dekabrdagi 168-sonli buyrug'i bilan tashkil etilgan hamda O'zbekiston respublikasi prezidentining 2021 yil 6 apreldagi "Suv resurslarini foydalanishdagi davlat boshqaruvi va nazorat tizimi yanada takomillashtirish hamda suv hujaligi obyektlarini havfsizligini taminlash chora tadbirlari to'g'risida" gi PF-6200 - son farmoni hamda O'zbekiston Respublikasi suv hujaligi vazirligi faoliyatini yanada takomillashtirish chora tadbirlari to'g'risidagi PQ-5055-son qarori va O'zbekiston Respublikasi vairlar maxkamasining 573-sonli qarori va Suv hujaligi tizimlari hava boshqarmasi 2021 yil 4 oktyabirdagi 111-sonli buyruqlari asosida Nizom qayta ishlab chiqarilgan.
                    </p>
                   
                </section>
                <section>
                    <h1>3</h1>
                    <div className="blackCover"></div>
                    <p>
                        Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasi o'z faoliyatida O'zbekiston Respublikasi konstitutsiyasiga konunlariga, O'zbekiston Respublikasi Oliy majlisi palatalarini qonunlariga, O'zbekiston Respublikasi vazirlar maxkamasining qarorlari va farmoishlariga shuningdek, suv hujaligini vazirligining buyruqlariga va Amu-Qashqadaryo irrigatsiya tizimlari havza boshqarmalari buyruqlariga hamda ushbu nizomiga va boshqa qonun hujjatlariga amal qiladi.
                    </p>
                </section>
                <section>
                    <h1>4</h1>
                    <div className="blackCover"></div>
                    <p>
                        Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasi yuridik shaxs hisoblanadi. Ular O'zbekiston Respublikasi davlat gerbi tasviri tushirilgan va o'z nomi davlat tilida yozilgan muxri va blankalarga, mustaqil balansga, O'zbekiston Respublikasi moliya vazirligi g'aznachilik shaxsiy hizob raqamlariga banklarda xisob raqamlariga ega.
                    </p>
                </section>
                <section>
                    <h1>5</h1>
                    <div className="blackCover"></div>
                    <p>
                        Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasini rasmiy nomlanishi: Amu-Qashqadaryo irrigatsiya tizimlari xavza boshqarmasini huzuridagi Yakkabog-Guzor irrigatsiya tizimi boshqarmasi, qisqartitilgan noi Yakkabog'-G'uzor ITB.
                    </p> 
                </section>
                <section>
                    <h1>6</h1>
                   <div className="blackCover"></div>
                   <p>
                        Amu-Qashqadaryo irrigatsiya tizimlari xafza boshqarmasi xuzuridagi Yakkabog'- G'uzor irrigatsiya tizimi boshqarmasining yuridik manzili: Qashqadaryo viloyati, G'uzor shaxri, Mustaqillik ko'chasi 41-uy.
                   </p>
                </section>
            </div>
        </div>

        <div className="tashkiliy_tuzilma">
            <h1>Tashkiliy Tuzilma</h1>
            <div>
                <section>
                    Yakkabog'-G'uzor boshqarmasi tuzilmasiga quyidagilar kiradi: Yakkabog'-G'uzor boshqarmasining markaziy apparati: boshqaruv hodimlarining umumiy shtatlar soni - 7birlik. 
                </section>
                <img src={tashImage} alt="tashImage" />
            </div>
        </div>

    </div>
  )
}

export default Malumotlar