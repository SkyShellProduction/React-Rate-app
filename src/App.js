import './App.scss';
import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import CHF from './image/CHF.png';
import CNY from './image/CNY.png';
import EUR from './image/EUR.png';
import GBP from './image/GBP.png';
import JPY from './image/JPY.png';
import RUB from './image/RUB.png';
import USD from './image/USD.png';
import axios from 'axios';
import { RateContext } from './context/RateContext';
import { Dark } from './components/dark/Dark';
import { Modal } from './components/modal/Modal';
import { Input } from './components/input/Input';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      error: '',
      formControls: {
          email: {
              value: '',
              type: 'email',
              label: 'email',
              errorMessage: 'Введите корректный email',
              valid: false,
              touched: false,
              validation: {
                required: true,
                email: true
              }
          },
          password: {
            value: '',
            type: 'password',
            label: 'password',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validation: {
              required: true,
              minLength: 6
            }
          }
      },
      base: "USD",
      rate: '',
      date: '21.10.2021',
      currency: {
        USD: { name: 'Доллар США', flag: USD, course: ``},
        CHF: { name: 'Швейцарский Франк', flag: CHF, course: ``},
        CNY: { name: 'Китайский Юань', flag: CNY, course: ``},
        RUB: { name: 'Российский Рубль', flag: RUB, course: ``},
        JPY: { name: 'Японская йена', flag: JPY, course: ``},
        GBP: { name: 'Фунт Стерлингов', flag: GBP, course: ``},
        EUR: { name: 'Евро', flag: EUR, course: ``},
      },
      //calculator
      inputValue: 100,
      currencyValue: 'USD',
      result: 0,
      //sample
      sample: {base: 'EUR', base2: 'RUB', date: '', course: ''},
      sampleList: '',
      showModal: false,
      isFormValid: false
    }
  }
loginHandler = async() => {
  const authData = {
    email: this.state.formControls.email.value,
    password: this.state.formControls.password.value,
    returnSecureToken: true
  }
  try {
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyAx34ShFv4Wvvzs9edm35HEYF1p7ccfqdw`, authData);
    if(res.data.idToken){
      const formControls = {...this.state.formControls};
      formControls.email.value = '';
      formControls.password.value = '';
      this.setState({auth: true, showModal: false,  error: '', formControls })
    }
    
  } catch (e) {
    console.log(e);
    this.setState({error: 'Ошибка'})
  }
}
registerHandler = async() => {
  const authData = {
    email: this.state.formControls.email.value,
    password: this.state.formControls.password.value,
    returnSecureToken: true
  }
  try {
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyAx34ShFv4Wvvzs9edm35HEYF1p7ccfqdw`, authData);
    if(res.data.idToken){
      const formControls = {...this.state.formControls};
      formControls.email.value = '';
      formControls.password.value = '';
      this.setState({auth: true, showModal: false, error: '', formControls})
    }
  } catch (e) {
    console.log(e);
    this.setState({error: 'Ошибка'})
  }
}

  modalShowHandler = () => {
    this.setState({showModal: true});
  }
  modalHideHandler = () => {
    this.setState({showModal: false});
  }
  validateControl(value, validation){
    if(!validation){
       return true;
    }
    let isValid = true;
    if(validation.required){
        isValid = value.trim() !== '' && isValid;
    }
    if(validation.email){
        isValid = validateEmail(value) && isValid;
    }
    if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }
  onChangeHandler = (event, controlName) => {
     const formControls = {...this.state.formControls};
     const control = {...formControls[controlName]};
     control.value = event.target.value;
     control.touched = true;
     control.valid = this.validateControl(control.value, control.validation);
     formControls[controlName] = control;
     let isFormValid = true;
     Object.keys(formControls).forEach(item => {
       isFormValid = formControls[item].valid && isFormValid
     })
     this.setState({formControls, isFormValid});
  }
  renderInputs = () => {
    return Object.keys(this.state.formControls).map((item, i) => {
      const control = this.state.formControls[item];
      return (
        <Input key={item + i} 
        type={control.type}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        label={control.label}
        errorMessage={control.errorMessage}
        shouldValidate={true}
        onChange={(event) => this.onChangeHandler(event, item)}
        />
      )
    })
  }
  componentDidMount(){ //срабатывает перед отрисовкой страницы
    let access = 'e3e49a4a8bb639ed377be65e06936193';
    let https = `http://api.exchangeratesapi.io/v1/latest?access_key=${access}`;
    fetch(https)
    .then(data => data.json())
    .then(data=> {
      console.log(data);
      let currency = {...this.state.currency};
      let v = Object.keys(currency);
      for (let i = 0; i < v.length; i++) {
        currency[v[i]].course = data.rates[v[i]]
      }
      this.setState({
        base: data.base,
        data: data.date,
        currency
      })
      console.log(data.base);
      console.log(data.rates);
    })
    axios.get('https://rateapp-65320-default-rtdb.firebaseio.com/sample.json')
    .then(response => {
      this.setState({sampleList: response.data})
    })
  }
  baseHandler = (event) => {
    this.setState({sample: {...this.state.sample, base: event.target.value}});
  }
  base2Handler = (event) => {
    this.setState({sample: {...this.state.sample, base2: event.target.value}});
  }
  sampleDateHandler = (event) => {
    this.setState({sample: {...this.state.sample, date: event.target.value}});
  }

  inputValueHandler = (event) => {
      this.setState({inputValue: event.target.value});
  }
  currencyValueHandler = (event) => {
    this.setState({currencyValue: event.target.value});
  }
  dataWrite = async () => {
    let access = 'e3e49a4a8bb639ed377be65e06936193';
    let https = `http://api.exchangeratesapi.io/v1/${this.state.sample.date}?access_key=${access}`;
    await fetch(https)
    .then(data => data.json())
    .then(data => {
      this.setState({sample: {...this.state.sample, course: data.rates[this.state.sample.base2]}})
    })
     await axios.post('https://rateapp-65320-default-rtdb.firebaseio.com/sample.json', this.state.sample)
     .then((response) => {
       return('');
     })
     await axios.get('https://rateapp-65320-default-rtdb.firebaseio.com/sample.json')
     .then(response => {
       this.setState({sampleList: response.data})
     })
  }
  sampleRemove = async (id) => {
    let sampleList = {...this.state.sampleList};
    delete sampleList[id]
    this.setState({sampleList}); //если ключ и значение совпадают можно написать одним словом
    await axios.delete(`https://rateapp-65320-default-rtdb.firebaseio.com/sample/${id}.json`);
  }
  calculatorHadler =  async (value='USD') => {
    let access = '526e20be87bcf023c185916267110ba6';
    let https = `http://data.fixer.io/api/latest?access_key=${access}`;
    await fetch(https)
    .then(res => res.json())
    .then(res => {
      this.setState({result: res.rates[value] * this.state.inputValue});
    })
  }
  render(){
    // this.calculatorHadler()
    //настройка маршрутизации (роутинг)
    return(
      <RateContext.Provider value={
        {state: this.state, 
         inputValueHandler: this.inputValueHandler,
         currencyValueHandler: this.currencyValueHandler,
         calculatorHadler: this.calculatorHadler,
         baseHandler: this.baseHandler,
         base2Handler: this.base2Handler,
         sampleDateHandler: this.sampleDateHandler,
         dataWrite: this.dataWrite,
         sampleRemove: this.sampleRemove,
         renderInputs: this.renderInputs,
         modalShowHandler: this.modalShowHandler,
         modalHideHandler: this.modalHideHandler,
         loginHandler: this.loginHandler,
         registerHandler: this.registerHandler
        }}> 
        <div className="App">
           <Dark showModal = {this.state.showModal} modalHideHandler = {this.modalHideHandler}/>
           <Modal/>
           <Layout/>
        </div>
      </RateContext.Provider>
    )
  }
}

export default App;
