import React, { useState } from 'react';
import "./RegForm.css";
import "./TAM_Support_form.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TAM_Support_form = () => {
	const [fullName, setFullName] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [countryCode, setCountryCode] = useState('+91');
	const [phoneNo, setPhoneNo] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false);

	const formData = {
		fullName,
		companyName,
		countryCode,
		phoneNo,
		email,
		message
	};

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSending(true);

		const submissionData = { ...formData, formType: 'Support Inquiry' };

		axios.post('https://app.noqu.in/api/contact-form', submissionData)
			.then((_response) => {
				navigate('/Submit');
				console.log("Support request sent successfully via API");
				setIsSending(false);
			})
			.catch((error) => {
				navigate('/submit-fail');
				console.error(error);
				setIsSending(false);
			});
	};

	return (
		<div className="TAM_SupportForm_Wrapper">
			<form onSubmit={handleSubmit} className="reg-form">
				<div className="contact-form-head">
					<h3>SUPPORT</h3>
					<h2>GET IN TOUCH</h2>
				</div>

				<div className='CareerForm_row'>
					<label>Name <span>*</span></label>
					<input
						type="text"
						name="fullName"
						value={fullName}
						onChange={(event) => setFullName(event.target.value)}
						required
					/>
				</div>

				<div className='CareerForm_row'>
					<label>Company Name <span>*</span></label>
					<input
						type="text"
						name="companyName"
						value={companyName}
						onChange={(event) => setCompanyName(event.target.value)}
						required
					/>
				</div>

				<div className='Countrycode'>
					<label>Mobile No <span>*</span></label>
					<div className="ph_input">
						<div className="CountryCode_box">
							<select name='countryCode'
								className="Country-code"
								value={countryCode}
								onChange={(event) => setCountryCode(event.target.value)}
								required>
								<option value="">Select an option</option>
								<option value='+91'>+91</option>
								<option value='+1-242'>+1-242</option>
								<option value='+1-246'>+1-246</option>
								<option value='+1-264'>+1-264</option>
								<option value='+1-268'>+1-268</option>
								<option value='+1-284'>+1-284</option>
								<option value='+1-340'>+1-340</option>
								<option value='+1-345'>+1-345</option>
								<option value='+1-441'>+1-441</option>
								<option value='+1-473'>+1-473</option>
								<option value='+1-649'>+1-649</option>
								<option value='+1-664'>+1-664</option>
								<option value='+1-670'>+1-670</option>
								<option value='+1-671'>+1-671</option>
								<option value='+1-684'>+1-684</option>
								<option value='+1-758'>+1-758</option>
								<option value='+1-767'>+1-767</option>
								<option value='+1-784'>+1-784</option>
								<option value='+1-787 or +1-939'>+1-787 or +1-939</option>
								<option value='+1-809 and +1-829'>+1-809 and +1-829</option>
								<option value='+1-868'>+1-868</option>
								<option value='+1-869'>+1-869</option>
								<option value='+1-876'>+1-876</option>
								<option value='+20'>+20</option>
								<option value='+212'>+212</option>
								<option value='+213'>+213</option>
								<option value='+216'>+216</option>
								<option value='+218'>+218</option>
								<option value='+220'>+220</option>
								<option value='+221'>+221</option>
								<option value='+222'>+222</option>
								<option value='+223'>+223</option>
								<option value='+224'>+224</option>
								<option value='+225'>+225</option>
								<option value='+226'>+226</option>
								<option value='+227'>+227</option>
								<option value='+229'>+229</option>
								<option value='+230'>+230</option>
								<option value='+231'>+231</option>
								<option value='+232'>+232</option>
								<option value='+233'>+233</option>
								<option value='+234'>+234</option>
								<option value='+235'>+235</option>
								<option value='+236'>+236</option>
								<option value='+237'>+237</option>
								<option value='+238'>+238</option>
								<option value='+239'>+239</option>
								<option value='+240'>+240</option>
								<option value='+241'>+241</option>
								<option value='+242'>+242</option>
								<option value='+243'>+243</option>
								<option value='+244'>+244</option>
								<option value='+245'>+245</option>
								<option value='+248'>+248</option>
								<option value='+249'>+249</option>
								<option value='+250'>+250</option>
								<option value='+251'>+251</option>
								<option value='+252'>+252</option>
								<option value='+253'>+253</option>
								<option value='+254'>+254</option>
								<option value='+255'>+255</option>
								<option value='+256'>+256</option>
								<option value='+257'>+257</option>
								<option value='+258'>+258</option>
								<option value='+260'>+260</option>
								<option value='+261'>+261</option>
								<option value='+262'>+262</option>
								<option value='+263'>+263</option>
								<option value='+264'>+264</option>
								<option value='+265'>+265</option>
								<option value='+266'>+266</option>
								<option value='+267'>+267</option>
								<option value='+268'>+268</option>
								<option value='+269'>+269</option>
								<option value='+27'>+27</option>
								<option value='+290'>+290</option>
								<option value='+291'>+291</option>
								<option value='+297'>+297</option>
								<option value='+298'>+298</option>
								<option value='+299'>+299</option>
								<option value='+30'>+30</option>
								<option value='+31'>+31</option>
								<option value='+32'>+32</option>
								<option value='+33'>+33</option>
								<option value='+34'>+34</option>
								<option value='+350'>+350</option>
								<option value='+351'>+351</option>
								<option value='+352'>+352</option>
								<option value='+353'>+353</option>
								<option value='+354'>+354</option>
								<option value='+355'>+355</option>
								<option value='+356'>+356</option>
								<option value='+357'>+357</option>
								<option value='+358'>+358</option>
								<option value='+359'>+359</option>
								<option value='+36'>+36</option>
								<option value='+370'>+370</option>
								<option value='+371'>+371</option>
								<option value='+372'>+372</option>
								<option value='+373'>+373</option>
								<option value='+374'>+374</option>
								<option value='+375'>+375</option>
								<option value='+376'>+376</option>
								<option value='+377'>+377</option>
								<option value='+378'>+378</option>
								<option value='+380'>+380</option>
								<option value='+385'>+385</option>
								<option value='+386'>+386</option>
								<option value='+387'>+387</option>
								<option value='+389'>+389</option>
								<option value='+39'>+39</option>
								<option value='+40'>+40</option>
								<option value='+41'>+41</option>
								<option value='+418'>+418</option>
								<option value='+420'>+420</option>
								<option value='+421'>+421</option>
								<option value='+423'>+423</option>
								<option value='+43'>+43</option>
								<option value='+44'>+44</option>
								<option value='+45'>+45</option>
								<option value='+46'>+46</option>
								<option value='+47'>+47</option>
								<option value='+48'>+48</option>
								<option value='+49'>+49</option>
								<option value='+500'>+500</option>
								<option value='+501'>+501</option>
								<option value='+502'>+502</option>
								<option value='+503'>+503</option>
								<option value='+504'>+504</option>
								<option value='+505'>+505</option>
								<option value='+506'>+506</option>
								<option value='+507'>+507</option>
								<option value='+508'>+508</option>
								<option value='+509'>+509</option>
								<option value='+51'>+51</option>
								<option value='+52'>+52</option>
								<option value='+53'>+53</option>
								<option value='+54'>+54</option>
								<option value='+55'>+55</option>
								<option value='+56'>+56</option>
								<option value='+57'>+57</option>
								<option value='+58'>+58</option>
								<option value='+590'>+590</option>
								<option value='+591'>+591</option>
								<option value='+592'>+592</option>
								<option value='+593 '>+593 </option>
								<option value='+594'>+594</option>
								<option value='+595'>+595</option>
								<option value='+596'>+596</option>
								<option value='+597'>+597</option>
								<option value='+598'>+598</option>
								<option value='+599'>+599</option>
								<option value='+60'>+60</option>
								<option value='+61'>+61</option>
								<option value='+62'>+62</option>
								<option value='+63'>+63</option>
								<option value='+64'>+64</option>
								<option value='+65'>+65</option>
								<option value='+66'>+66</option>
								<option value='+670'>+670</option>
								<option value='+672'>+672</option>
								<option value='+673'>+673</option>
								<option value='+674'>+674</option>
								<option value='+675'>+675</option>
								<option value='+676'>+676</option>
								<option value='+677'>+677</option>
								<option value='+678'>+678</option>
								<option value='+679'>+679</option>
								<option value='+680'>+680</option>
								<option value='+681'>+681</option>
								<option value='+682'>+682</option>
								<option value='+683'>+683</option>
								<option value='+685'>+685</option>
								<option value='+686'>+686</option>
								<option value='+687'>+687</option>
								<option value='+688'>+688</option>
								<option value='+689'>+689</option>
								<option value='+690'>+690</option>
								<option value='+691'>+691</option>
								<option value='+692'>+692</option>
								<option value='+7'>+7</option>
								<option value='+81'>+81</option>
								<option value='+82'>+82</option>
								<option value='+84'>+84</option>
								<option value='+850'>+850</option>
								<option value='+852'>+852</option>
								<option value='+853'>+853</option>
								<option value='+855'>+855</option>
								<option value='+856'>+856</option>
								<option value='+86'>+86</option>
								<option value='+880'>+880</option>
								<option value='+886'>+886</option>
								<option value='+90'>+90</option>
								<option value='+91'>+91</option>
								<option value='+92'>+92</option>
								<option value='+93'>+93</option>
								<option value='+94'>+94</option>
								<option value='+95'>+95</option>
								<option value='+960'>+960</option>
								<option value='+961'>+961</option>
								<option value='+962'>+962</option>
								<option value='+963'>+963</option>
								<option value='+964'>+964</option>
								<option value='+965'>+965</option>
								<option value='+966'>+966</option>
								<option value='+967'>+967</option>
								<option value='+968'>+968</option>
								<option value='+970'>+970</option>
								<option value='+971'>+971</option>
								<option value='+972'>+972</option>
								<option value='+973'>+973</option>
								<option value='+974'>+974</option>
								<option value='+975'>+975</option>
								<option value='+976'>+976</option>
								<option value='+977'>+977</option>
								<option value='+98'>+98</option>
								<option value='+992'>+992</option>
								<option value='+993'>+993</option>
								<option value='+994'>+994</option>
								<option value='+995'>+995</option>
								<option value='+996'>+996</option>
								<option value='+998'>+998</option>
							</select>
						</div>
						<input
							type="text"
							name="phoneNo"
							value={phoneNo}
							onChange={(event) => setPhoneNo(event.target.value)}
							pattern="\d+"
							required
						/>
					</div>
				</div>

				<div className='CareerForm_row'>
					<label>Email ID <span>(Optional)</span></label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>

				<div className='CareerForm_row'>
					<label>Query <span>*</span></label>
					<textarea
						name="message"
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						required
					/>
				</div>

				<div className="reg-form-submit">
					<button type="submit" disabled={isSending}>
						{isSending ? 'Submitting...' : 'Submit'}
					</button>
				</div>

				<div className="TAM_SupportForm_actions">
					<a href="tel:+917407123123" className="TAM_Feature_ActionBtn call-btn">
						<div className="btn-icon">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
							</svg>
						</div>
						<span className="btn-label">Support</span>
					</a>

					<a href="https://wa.me/917548825802" target="_blank" rel="noreferrer" className="TAM_Feature_ActionBtn whatsapp-btn">
						<div className="btn-icon">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
								<path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.046-1.107l-.29-.173-3.004.854.856-2.995-.19-.308A7.948 7.948 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
							</svg>
						</div>
						<span className="btn-label">Whatsapp</span>
					</a>
				</div>

			</form>
		</div>
	);
}

export default TAM_Support_form;