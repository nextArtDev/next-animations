'use client'
import { FC } from 'react'

interface formProps {}

const Form: FC<formProps> = ({}) => {
  return (
    <section className="container  relative w-64 h-64 flex justify-center items-center ">
      <div className="login-box absolute w-[400px]">
        <h2 className="text-[2em] text-[#0ef] text-center ">login</h2>
        <form className="w-full px-[50px]">
          <div className="input-box relative my-6 transition-all duration-300">
            <input
              className="w-full text-white bg-transparent border border-[#2c4766] outline-none rounded-[40px] h-12 px-5 text-[1em] focus:border-[#0ef] valid:border-[#0ef] "
              type="email"
              required
            />
            <label className="absolute top-[50%] left-5 -translate-y-[50%] text-white text-[1em] pointer-events-none transition-all ease-linear duration-200 rounded-full ">
              Email
            </label>
          </div>
          <div className="input-box relative my-6 transition-all duration-200">
            <input
              className="w-full text-white bg-transparent border border-[#2c4766] outline-none rounded-[40px] h-12 px-5 text-[1em] focus:border-[#0ef] valid:border-[#0ef] "
              type="password"
              required
            />
            <label className="absolute top-[50%] left-5 -translate-y-[50%] text-white text-[1em] pointer-events-none transition-all ease-linear duration-300 rounded-full ">
              Password
            </label>
          </div>
          <div className="forgot-password -mt-[15px] mb-[10px] text-center  ">
            <a
              href="#"
              className="text-[0.85em] text-white no-underline hover:underline hover:underline-offset-auto"
            >
              {' '}
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="btn w-full h-[45px] bg-[#0ef] rounded-[45px] border-none outline-none cursor-pointer text-[1em] text-black uppercase font-semibold "
          >
            Login
          </button>
          <div className="signup-link mt-[20px] mb-[10px] text-center ">
            <a
              className="text-[1em] text-[#0ef] no-underline font-semibold "
              href="#"
            >
              {' '}
              Signup
            </a>
          </div>
        </form>
        <span style={{ '--i': 0 } as React.CSSProperties}></span>
        <span style={{ '--i': 1 } as React.CSSProperties}></span>
        <span style={{ '--i': 2 } as React.CSSProperties}></span>
        <span style={{ '--i': 3 } as React.CSSProperties}></span>
        <span style={{ '--i': 4 } as React.CSSProperties}></span>
        <span style={{ '--i': 5 } as React.CSSProperties}></span>
        <span style={{ '--i': 6 } as React.CSSProperties}></span>
        <span style={{ '--i': 7 } as React.CSSProperties}></span>
        <span style={{ '--i': 8 } as React.CSSProperties}></span>
        <span style={{ '--i': 9 } as React.CSSProperties}></span>
        <span style={{ '--i': 10 } as React.CSSProperties}></span>
        <span style={{ '--i': 11 } as React.CSSProperties}></span>
        <span style={{ '--i': 12 } as React.CSSProperties}></span>
        <span style={{ '--i': 13 } as React.CSSProperties}></span>
        <span style={{ '--i': 14 } as React.CSSProperties}></span>
        <span style={{ '--i': 15 } as React.CSSProperties}></span>
        <span style={{ '--i': 16 } as React.CSSProperties}></span>
        <span style={{ '--i': 17 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 19 } as React.CSSProperties}></span>
        <span style={{ '--i': 20 } as React.CSSProperties}></span>
        <span style={{ '--i': 21 } as React.CSSProperties}></span>
        <span style={{ '--i': 22 } as React.CSSProperties}></span>
        <span style={{ '--i': 23 } as React.CSSProperties}></span>
        <span style={{ '--i': 24 } as React.CSSProperties}></span>
        <span style={{ '--i': 25 } as React.CSSProperties}></span>
        <span style={{ '--i': 26 } as React.CSSProperties}></span>
        <span style={{ '--i': 27 } as React.CSSProperties}></span>
        <span style={{ '--i': 28 } as React.CSSProperties}></span>
        <span style={{ '--i': 29 } as React.CSSProperties}></span>
        <span style={{ '--i': 30 } as React.CSSProperties}></span>
        <span style={{ '--i': 31 } as React.CSSProperties}></span>
        <span style={{ '--i': 32 } as React.CSSProperties}></span>
        <span style={{ '--i': 33 } as React.CSSProperties}></span>
        <span style={{ '--i': 34 } as React.CSSProperties}></span>
        <span style={{ '--i': 35 } as React.CSSProperties}></span>
        <span style={{ '--i': 36 } as React.CSSProperties}></span>
        <span style={{ '--i': 37 } as React.CSSProperties}></span>
        <span style={{ '--i': 38 } as React.CSSProperties}></span>
        <span style={{ '--i': 39 } as React.CSSProperties}></span>
        <span style={{ '--i': 40 } as React.CSSProperties}></span>
        <span style={{ '--i': 41 } as React.CSSProperties}></span>
        <span style={{ '--i': 42 } as React.CSSProperties}></span>
        <span style={{ '--i': 43 } as React.CSSProperties}></span>
        <span style={{ '--i': 44 } as React.CSSProperties}></span>
        <span style={{ '--i': 45 } as React.CSSProperties}></span>
        <span style={{ '--i': 46 } as React.CSSProperties}></span>
        <span style={{ '--i': 47 } as React.CSSProperties}></span>
        <span style={{ '--i': 48 } as React.CSSProperties}></span>
        <span style={{ '--i': 49 } as React.CSSProperties}></span>
      </div>
    </section>
  )
}

export default Form

// Global css
// .input-box input:focus ~ label,
// .input-box input:valid ~ label {
//   top: 1px;
//   background-color: #1f293a;
//   padding: 0 6px;
//   color: #0ef;
// }

//   const [i, setI] = useState(0);

//  const incrementI = () => {
//     setI(i + 1);
//   };

//   return (
//     <span style={{ '--i': i }}>
//       {/* Content */}
//     </span>
