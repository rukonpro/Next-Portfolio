import {Chewy, Inter} from "next/font/google";


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const chewy = Chewy({ weight: '400',subsets:['latin'], variable: '--font-chewy' });



export {
    inter,
    chewy
}