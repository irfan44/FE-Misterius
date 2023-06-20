import {Button, Label, TextInput} from "flowbite-react";

const Register = () => {
    return (<section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                YukJahit
            </a>
            <div
                className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Register
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Insert your name here"
                                required
                                type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="Insert your email here"
                                required
                                type="email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                placeholder="********"
                                required
                                type="password"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Phone"
                                />
                            </div>
                            <TextInput
                                id="phone"
                                placeholder="Insert your phone number here"
                                required
                                type="text"
                            />
                        </div>
                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </section>)
};

export default Register;