import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './OrderPage.css';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import Logo from '../../../Assets/mile1-assets/logo.svg'
  
  const icindekilerList = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Sucuk',
    'Jalepeno',
    'Sarımsak',
    'Biber',
    'Mozarella',
    'Ananas',
    'Kabak',
  ];
  
  export default function OrderPage() {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [kalinlik, setKalinlik] = useState('');
    const [extraicerik, setExtraicerik] = useState([]);
    const [note, setNote] = useState('');
    const [sayi, setSayi] = useState(1);
    const [hata, setHata] = useState({});
    const ucret = 85.5;
    const extraucret = 5;
    let history = useHistory();
  
    const IngredientChange = (ingredient) => {
      setExtraicerik((prev) => {
        if (prev.includes(ingredient)) {
          return prev.filter((item) => item !== ingredient);
        } else {
          if (prev.length < 10) {
            return [...prev, ingredient];
          } else {
            return prev;
          }
        }
      });
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!name || name.length < 3)
        newErrors.name = 'İsim en az 3 karakter olmalıdır.';
      if (!size) newErrors.size = 'Lütfen pizza boyutunu seçin.';
      if (!kalinlik) newErrors.kalinlik = 'Lütfen hamur kalınlığını seçin.';
      if (extraicerik.length < 4 || extraicerik.length > 10)
        newErrors.extraicerik = '4 ila 10 malzeme seçmelisiniz.';
  
      setHata(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const priceCalculation = () => {
      return ucret + extraucret * extraicerik.length;
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!validateForm()) return;
  
      const orderData = {
        name,
        size,
        kalinlik,
        extraicerik,
        note,
        sayi,
        totalPrice: priceCalculation() * sayi,
      };
  
      try {
        const response = await axios.post(
          'https://reqres.in/api/pizza',
          orderData
        );
        console.log("Sipariş Özeti:", response.data);
        history.push('/CorrectionPage');
      } catch (error) {
        console.error('Sipariş başarısız:', error);
      }
    };
  
    return (
      <>
        <div className="order-header">
          <header>
            <img src= {Logo} className="order-logo" />
            <div className="navigation">
              <NavLink
                exact
                to="/"
                activeClassName="active-link"
                className="navbar"
              >
                Anasayfa
              </NavLink>
              <NavLink
                to="/OrderPage"
                activeClassName="active-link"
                className="navbar"
              >
                Sipariş Oluştur
              </NavLink>
            </div>
          </header>
        </div>
        <Form className="order-page" onSubmit={handleSubmit}>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="rating-part">
            <div className="price">85.50₺</div>
            <div className="rating">4.9 (200)</div>
          </div>
          <p className="text-part">
            Frontent Dev olarak hala position:absolute kullaniyorsan bu çok acı
            pizza tam sana göre. Pizza. domates, peynir ve genellikle çeşitli
            diger malzemelerle kaplanmış. daha sonra geleneksel olarak odun
            ateşinde bir firinda yüksek sicaklkta pişirilen, genellikle yuvarlak,
            düzieştirilmiş mayalı bugday bazlı hamurdan oluşan italyan kökenli
            lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </p>
          <div className="input-container">
            <h3>
              İsim <span style={{ color: 'red' }}>*</span>
            </h3>
            {hata.name && <p className="error">{hata.name}</p>}
            <Input
              type="text"
              name="name"
              placeholder="İsminizi Girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="pizza-size-container">
            <div className="pizza-size">
              <h3>
                Boyut Seç <span style={{ color: 'red' }}>*</span>
              </h3>
              {hata.size && <p className="error">{hata.size}</p>}
              <FormGroup>
                <Input
                  id="küçük"
                  type="radio"
                  name="size"
                  value="Küçük"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="küçük">Küçük</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  id="orta"
                  type="radio"
                  name="size"
                  value="Orta"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="orta">Orta</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  id="büyük"
                  type="radio"
                  name="size"
                  value="Büyük"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="büyük">Büyük</Label>
              </FormGroup>
            </div>
            <div className="pizza-hamur">
              <h3>
                Hamur Seç<span style={{ color: 'red' }}>*</span>
              </h3>
              {hata.kalinlik && <p className="error">{hata.kalinlik}</p>}
              <FormGroup>
                <Input
                  type="select"
                  name="pizzaHamur"
                  value={kalinlik}
                  onChange={(e) => setKalinlik(e.target.value)}
                >
                  <option value="" disabled>
                    Hamur Kalınlığı
                  </option>
                  <option value="klasik">Klasik Hamur</option>
                  <option value="ince">İnce Hamur</option>
                </Input>
              </FormGroup>
            </div>
          </div>
          <div>
            <h3>Ek malzemeler</h3>
            <p>4 ila 10 malzeme seçmelisiniz. 5₺</p>
            {hata.extraicerik && (<p className='error'>{hata.extraicerik}</p>)}
          </div>
          <div className='malzemeler-container'>
            {icindekilerList.map((ingredient) => (
                <FormGroup key={ingredient} check>
                    <Label check>
                        <Input type='checkbox' onChange={()=>IngredientChange(ingredient)} checked ={extraicerik.includes(ingredient)}
                        />
                            {' '}
                            {ingredient}
                        
                    </Label>
                </FormGroup>
            ))}
          </div>
          <div className='input-container'>
            <h3>Sipariş Notu</h3>
            <Input type='textarea' name='siparisNotu' placeholder='Siparişine eklemek istediğin bir not var mı?' 
            id='textArea' value={note} onChange={(e) => setNote(e.target.value)}/>
          </div>
          <hr/>
          <div className='siparis-container'>
            <div className='counter-button'>
              <Button className='sayici-button1' onClick={() => setSayi(sayi-1)} disabled= {sayi <= 1}>-</Button>
              <span className='sayiCounter'>{sayi}</span>
              <Button className='sayici-button2' onClick={(e) => setSayi(sayi + 1)}>+</Button> 
            </div>
          </div>

          <div className='siparis-toplami'>
            <div className='tutar-container'>
              <h3>Sipariş Toplamı</h3>
              <div className='fiyatlar grey'>
                <p>Seçimler</p>
                <p>
                  {(extraicerik.length * extraucret).toFixed(2)}₺
                </p>
              </div>
              <div className='fiyatlar red'>
                <p>Toplam</p>
                <p>{(priceCalculation() * sayi).toFixed(2)} </p>
              </div>
            </div>
            <Button type='submit' className='submit-button'>
              Sipariş Ver
            </Button>
          </div>
          
        </Form>
      </>
    );
  }
  