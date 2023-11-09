
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { db } from '../firebase';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target['first-name'].value,
      lastName: event.target['last-name'].value,
      company: event.target.company.value,
      email: event.target.email.value,
      phoneNumber: event.target['phone-number'].value,
      experience: event.target.message.value,
      technicalQuestions: technicalQuestions,
      isApproved: false,
    }
    try{
      const docRef = await addDoc(collection(db,"formResponses"),formData);
      console.log("Document written with ID: ", docRef.id);
    }
    catch(e){
      console.error("Error adding document: ", e);
    }
  };
  const [agreed, setAgreed] = useState(false)
  const [technicalQuestions, setTechnicalQuestions] = useState(['']);
  const [hrQuestions,setHrQuestions]=useState(['']);
  
  const addTechnicalQuestion = () => {
    setTechnicalQuestions([...technicalQuestions, '']);
  };
  const addHrQuestion = () =>{
    setHrQuestions([...hrQuestions,'']);
  };
  const [showOtherInput, setShowOtherInput] = useState(false);
  const handleCompanyChange = (event) => {
    if (event.target.value === "Other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };
  const handelHrQuestionChange=(index,event)=>{
    const newHrQuestion=[...hrQuestions];
    newHrQuestion[index]=event.target.value;
    setHrQuestions(newHrQuestion);
  };
  const handleTechnicalQuestionChange = (index, event) => {
    const newQuestions = [...technicalQuestions];
    newQuestions[index] = event.target.value;
    setTechnicalQuestions(newQuestions);
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PrepHelp On-Campus Placement Interview Experience Form</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Share your insights and experience with uPrep's on-campus placement interviews
        </p>
      </div>
      <form action="#" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              University ID.
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Roll_No"
                required
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
        Company
      </label>
      <div className="mt-2.5 col-span-2">
        <select
          name="company"
          id="company"
          required
          autoComplete="organization"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={handleCompanyChange}
        >
          <option value="" disabled selected hidden>
            Select a company
          </option>
          <option value="Google">Google</option>
          <option value="Apple">Apple</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Amazon">Amazon</option>
          <option value="Facebook">Facebook</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {showOtherInput && (
        <div>
          <label htmlFor="otherCompany" className="block text-sm font-semibold leading-6 text-gray-900">
            Other Company
          </label>
          <input
            type="text"
            id="otherCompany"
            name="otherCompany"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      )}
    </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                required
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>IN</option>
                
                </select>
                
              </div>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                required
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Your Experience
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Technical Questions Asked
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <button type="button" onClick={addTechnicalQuestion}>
            Add Question
          </button> */}
          <div className='sm:col-span-2'>
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Technical Questions Asked
            </label>
            
            {technicalQuestions.map((question,index)=>(

                <div className="mt-2.5" key={index}>
                <textarea
                  type="text"
                  placeholder={`Question ${index + 1}`}
                  value={question}
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => handleTechnicalQuestionChange(index, event)}
                />
              </div>
            ))

            }
            </div>
            <button type="button" onClick={addTechnicalQuestion} className='block  my-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add Question
          </button>
          <div className='sm:col-span-2'>
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              HR Questions Asked
            </label>
            
            {hrQuestions.map((question,index)=>(

                <div className="mt-2.5" key={index}>
                <textarea
                  type="text"
                  placeholder={`Question ${index + 1}`}
                  value={question}
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => handelHrQuestionChange(index,event)}
                />
              </div>
            ))

            }
            </div>
            <button type="button" onClick={addHrQuestion} className='block  my-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add Question
          </button>

          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}