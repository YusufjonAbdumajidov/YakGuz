import React from 'react'

const Qabul = () => {
  return (
    <div className='qabulContainer'>
      <h1>Qabul Jadvali</h1>
      <table border="1">
        <tr>
            <th>Lavozimi</th>
            <th>F.I.SH</th>
            <th>Qabul kunlari</th>
            <th>Qabul vaqti</th>
            <th>Telefon raqami</th>
            {/*  "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject" */}
        </tr>
        <tr>
            <td>Boshqarma boshlig'i</td>
            <td>Azimov Bayramali Begmatovich</td>
            <td>Har haftaning dushanba kuni</td>
            <td>10:00 dan 12:00 gacha</td>
            <td>93-900-19-72</td>
        </tr>
        <tr>
            <td>Boshliq o'rinbosari</td>
            <td></td>
            <td>Har haftaning seshanba kuni</td>
            <td>9:00 dan 12:00 gacha</td>
            <td></td>
        </tr>
        <tr>
            <td>Boshqarma kasaba uyushma qo'mitasi raisi</td>
            <td>Rasulov Sobir Rashidovich</td>
            <td>Har haftaning chorshanba kuni</td>
            <td>10:00 dan 12:00 gacha</td>
            <td>93-525-3762</td>
        </tr>
        <tr>
            <td>Kadrlar bo;yicha bosh mutaxasis</td>
            <td>Qodirov Baxrom Jalilovich</td>
            <td>Har haftaning payshanba kuni</td>
            <td>9:00 dan 16:00 gacha</td>
            <td>93-525-5159</td>
        </tr>
        <tr>
            <td>Bosh yurikonsult</td>
            <td>Turayev Nuridillo Toirovich</td>
            <td>Har haftaning juma kuni</td>
            <td>10:00 dan 12:00 gacha</td>
            <td>97-290-04-65</td>
        </tr>
    </table>
    </div>
  )
}

export default Qabul