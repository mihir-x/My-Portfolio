import { Button, Card, Label, TextInput } from "flowbite-react";
import Headings from "../../Components/Shared/Headings/Headings";
import axios from "axios";
import swal from "sweetalert";


const Contact = () => {
    const handleSendMail = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const message = form.message.value
        const mailObject = {
            email, message
        }
        console.log(mailObject)
        try {
            const res = await axios.post('https://my-portfolio-server-omega.vercel.app/send-mail', mailObject)
            if (res.data.status === 200){
                form.reset()
                swal("Success!", "Thank you for your email", "success")
            }
        }
        catch (err) {
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        }
    }
    return (
        <div>
            <Headings heading='Send Me A Mail'></Headings>
            <div className="flex items-center justify-center">
                <Card className="max-w-sm">
                    <form onSubmit={handleSendMail} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your Email" />
                            </div>
                            <TextInput id="email1" name="email" type="email" placeholder="Email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="message" value="Your message" />
                            </div>
                            <TextInput id="message" name="message" type="text" required />
                        </div>
                        <Button type="submit">Send Mail</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;