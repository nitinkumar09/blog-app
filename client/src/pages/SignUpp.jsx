import { Link } from "react-router-dom"
import { Button, Label, TextInput } from "flowbite-react"
export default function SignUpp() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

                {/* left side */}
                <div className="flex-1">
                    <Link to='/'
                        className="font-bold dark:text-white text-4xl"
                    >
                        <span className="px-3 py-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Nitin's</span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">This is s demo project. You can sign up with your email and passwrd or with Google.</p>
                </div>

                {/* right side */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div className="">
                            <Label value="Your username" />
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id='username'
                            />
                        </div>

                        <div className="">
                            <Label value="Your email" />
                            <TextInput
                                type="email"
                                placeholder="name@company.com"
                                id='email'
                            />
                        </div>

                        <div className="">
                            <Label value="Your password" />
                            <TextInput
                                type="text"
                                placeholder="Password"
                                id='password'
                            />
                        </div>

                        <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to="/sign-in" className="text-blue-500">Sign In</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
