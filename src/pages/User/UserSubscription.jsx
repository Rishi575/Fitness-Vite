import React, { useState } from 'react'
import { razorpayconfig, testuserconfig, MembershipPlans } from '@/config/config'
import { CoolMode } from '@/components/magicui/cool-mode'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'

const UserSubscription = () => {
  const [membership, setMembership] = useState(false)
  const [plandata, setPlandata] = useState({
    planName: '',
    planPrice: 0,
    planDays: 0,
    key: ''
  })
  const handleUpgrade = (planname, planprice, planddays) => {
    if (planprice > 0) {
      const options = {
        key: razorpayconfig.key,
        key_secret: razorpayconfig.key_secret,
        amount: planprice * 100,
        currency: razorpayconfig.currency,
        name: razorpayconfig.name,
        handler: (res) => {
          alert(res.razorpay_payment_id)
          setPlandata({
            planName: planname,
            planPrice: planprice,
            planDays: planddays,
            key: res.razorpay_payment_id
          })
          setMembership(true)
        },
        prefill: {
          name: testuserconfig.name,
          email: testuserconfig.email,
          contact: testuserconfig.contact
        },
        notes: {
          address: " office",
        },
        theme: {
          color: '#f5f5f7'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
    else {
      alert("invalid amount")
    }

  }

  return (
    <>
      {/* <UserTitlebar Title='Membership Plans' /> */}
      <div className='flex justify-center items-center bg-transparent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto gap-16'>
        {membership ? (
          <>
            {plandata.planName}
            {plandata.planDays}
          </>
        ) : (
          <>
            {
              MembershipPlans.map((plan) => (
                <div className='flex flex-col justify-center items-center h-[30vh] w-[20vw] shadow-md shadow-orange-500/60 hover:shadow-orange-700' key={plan.pid}>
                  <div className='h-1/4 w-full flex justify-center items-center font-bold text-orange-500 text-xl border-2 border-orange-500 '>
                    {plan.planname}
                  </div>
                  <div className='h-2/4 flex flex-col w-full justify-around items-center'>
                  <div className='flex justify-center items-center font-serif text-foreground text-xl'>
                      {
                        plan.price === 0 ? 'Free Plan' : `Rs. ${plan.price}`
                      }
                    </div>
                    <div className='flex justify-center items-center font-serif text-foreground text-xl '>
                      {plan.days} Days
                    </div>
                  </div>
                  <div className='h-1/4 w-full flex justify-center items-center'>
                    {
                      plan.price === 0 ? '' :
                        (
                          <>
                          <div className='flex justify-center items-center bg-foreground h-8 w-24 rounded-md'>
                          <CoolMode>
                            <button className='z-10 h-20 w-44 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]' onClick={() => { handleUpgrade(plan.planname, plan.price, plan.days) }}> Upgrade </button>
                          </CoolMode>
                          </div>
                          </>
                        )
                    }
                  </div>
                </div>
              ))
            }
          </>
        )
        }

      </div>
    </>
  )
}

export default UserSubscription