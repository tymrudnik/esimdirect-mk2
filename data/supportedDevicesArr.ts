// Supoorted devices array
import { AppleLogo, SamsungLogo, NokiaLogo, GoogleLogo } from "@/assets"
import { DeviceType } from "@/types"

export const supportedDevicesArr: DeviceType[] = [
  {
    company: "Apple",
    icon: AppleLogo,
    phones: [
      {
        name: "iPhone 15",
        link: "https://www.amazon.co.uk/Apple-iPhone-15-128-GB/dp/B0CHXFCYCR?crid=1BL4XGTAJ1WE9&dib=eyJ2IjoiMSJ9.v7inL0baUT7ree2ioTsLCrzqwc6LavvwgiO24B2hUuZZ1QctPTFSggmmjPCaVmhQuHRIHehFVpNMfeiLm2ta1iOYP4H4XH-gczuSoY05gOUsQHi055Rs8OcnvVxivvhosvOmnm1ru1y5SkrRBXUbRQ.PyO1mIA0prWrK8cMGXDTQOrp7EdD6-PKxHaSzKfZTpQ&dib_tag=se&keywords=iPhone+15&qid=1705248470&sprefix=iphone+15%2Caps%2C91&sr=8-3&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=fbb31cd989f1b77c1a3f75bd0e3a61f7&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "iPhone 14",
        link: "https://www.amazon.co.uk/Apple-iPhone-14-128-GB/dp/B0BDJHR5DD?crid=TQFSK8RRXRK7&dib=eyJ2IjoiMSJ9.IhXUmiqWeIEpcdR_abPAtPApagp8Dj8pHH9Ri5s0uHcLxje3J4EVDo53UH7k1XDi7K0JmS8YiqnmnQKGFUSCIZUtRre9xeMOl5xkGzGygfT7jtgfKgUCsGhPa6GLGsTLpIwORBR8d1ZpFTs54vUlEg.3p0S7H2mLVgcFD38LFHSI3Z2EI5f21uM1v0yys1L2Fc&dib_tag=se&keywords=iPhone+14&qid=1705248417&sprefix=iphone+14%2Caps%2C85&sr=8-3&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=3c58c32d941f92a20f4e49a46442b9a4&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "iPhone SE 3",
        link: "https://www.amazon.co.uk/2022-Apple-iPhone-SE-Starlight/dp/B09V4NVB2P?crid=1UPWEU2Y8LJ10&dib=eyJ2IjoiMSJ9.OXeBdY4zLMap8xDdeFkeYSAUhGMq1xJGDaTkS0CuT6LzazNlbKOPdWvZLaVXKxrnFk3a7UXudeiRR5Jl7Q1euGgDJc8oidRSGoHuBpxnYSLKcuudcfm4PInqDnl9ErnkpIppakiXxIDOfLTKWe16eA.bpvwKPRYP14U5r-wVr2mpOmPlydJDSD7Dl4ihpKg8CU&dib_tag=se&keywords=iPhone+se&qid=1705248388&sprefix=iphone+se%2Caps%2C109&sr=8-3&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=b4200190c0142146749ba5e3950ce71b&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "iPhone 13",
        link: "https://www.amazon.co.uk/Apple-iPhone-13-128GB-Midnight/dp/B09G95MCDT?crid=3J5YMYBLGZJ2V&dib=eyJ2IjoiMSJ9.rMc0bA4x40NShS2P1U5rT8ni1yv0JWsKEJurk2gGf7X4gLlu2Fk5-WCqg2j0oGd0DIxRl8p9AqUIt9DXLL6ZoHwFBSEaxDuEFRTQyaj7OF-NqfQgHkkOdMjp3XGc11Du2JL4xAz1cvyhRuguCCm1YA.WVVDjZOWK_jPkjY1h3wV1V91OWYUfO4Crx1RpDZHXnc&dib_tag=se&keywords=iPhone+13&qid=1705247964&sprefix=iphone+13%2Caps%2C111&sr=8-3&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=0201ff73febdcfd8e23e40c004e5cdb4&language=en_GB&ref_=as_li_ss_tl",
      },
    ],
  },
  {
    company: "Google",
    icon: GoogleLogo,
    phones: [
      {
        name: "Pixel 8",
        link: "https://www.amazon.co.uk/Google-Pixel-Unlocked-smartphone-advanced/dp/B0CGVP8NRC?crid=AH3JK8XOMFZ3&dib=eyJ2IjoiMSJ9.RXtrfuCJ8gJgMzOXECEniRVkOSQa98NphnnzZs9mwrztCF_oMG-BssPZW7AYz6jc_QFt60JlYsEl84Ynw4Ur_rZph88_ZmWCppkTakLEXasqU-LceauWWhQujKxkUTSJ7QdDxvccfO-4-BGyZZ5CbQ.0TVPJjhsW24Zzpt9DgI2IdcSL8XXWDtbN6CV0VKL5m0&dib_tag=se&keywords=pixel+8&qid=1705248568&sprefix=pixel+8%2Caps%2C86&sr=8-2&ufe=app_do%3Aamzn1.fos.16386313-b7bf-4b29-bfa1-0d3d5f3a0dd5&linkCode=ll1&tag=esimdirect-21&linkId=0636b891c24b0ead80d6ced0517d67c8&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Pixel 7",
        link: "https://www.amazon.co.uk/Google-Pixel-Unlocked-Smartphone-wide-angle/dp/B0BDK63RF3?crid=3UUDSAUKAB8GA&dib=eyJ2IjoiMSJ9.aSZA3RmXlz-EBwc6mDg4Jekw93LUWMWLlqCxM7GPIs7BFdEoH3FOHHYYh1DJXQXnWOYaGuzlkqcyrmD34tDU5CfYP9pgyVFbKoZAwh33m4eATJu9fj7HPfEXVnPZ2pWoU6nKVSAWTWgcqOZMffLXBA.f-U3_4zFI_goDKUT2EOQPjoWrfNrDPmw2RQPQ8CiR0I&dib_tag=se&keywords=pixel+7&qid=1705248595&sprefix=pixel+7%2Caps%2C85&sr=8-3&ufe=app_do%3Aamzn1.fos.16386313-b7bf-4b29-bfa1-0d3d5f3a0dd5&linkCode=ll1&tag=esimdirect-21&linkId=ceb29812d1ae2b731daa0f136d93b052&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Pixel 6",
        link: "https://www.amazon.co.uk/Google-Pixel-Smartphone-Megapixel-Wide-Angle/dp/B09G77DR7C?crid=2PJRLFIDD9XR1&dib=eyJ2IjoiMSJ9.LGhKYvCevj7bg4BI5WZMIZtT8bnpVISCvx1dBDMEcegsO-JKQhl4sXDwnXKL5I7b1TO7wYA8v0WJz6hOqgpHtnN8yLRYjTU089_VYmZYmAv-egNChUyALNpS8lpK1U0g60hHOY21aUu1PourjyWRlw.tgLp56rlc78E-YnhF2pVjPbbLMCDqfBZo4NU8AydpYY&dib_tag=se&keywords=pixel+6&qid=1705249398&sprefix=pixel+6%2Caps%2C117&sr=8-3&linkCode=ll1&tag=esimdirect-21&linkId=cc3f66ae46f9870b1749aa1b16043227&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Pixel 5",
        link: "https://www.amazon.co.uk/Google-Android-Mobile-Battery-Resistant-Sorta-Sage/dp/B08JLS7MZ2?crid=21N5GODPQ8KD1&dib=eyJ2IjoiMSJ9.ZtpccdNgkwPIgfNdNnK8OY5s3Go-ir87uWT1fNyCTYhPYsMgdXwqtwtwaHZbR7qWe6XrLWmeWgGyQxN__MdmltSO6XM9xXN_XQL6jY6h_PpAnSQPuHDWMqjA07R_n7F9qszxQvtbKemRuctUfhdkVg.LGFbsvFuTuoqinSMsP4S5a92Vm6D3D8F5l07vADvJaM&dib_tag=se&keywords=pixel+5&qid=1705249426&sprefix=pixel+5%2Caps%2C94&sr=8-4&linkCode=ll1&tag=esimdirect-21&linkId=a04aa07294cb67b5770b44e6c37c6e9a&language=en_GB&ref_=as_li_ss_tl",
      },
    ],
  },
  {
    company: "Nokia",
    icon: NokiaLogo,
    phones: [
      {
        name: "G60 5G",
        link: "https://www.amazon.co.uk/Nokia-Smartphone-upgrades-Warranty-Recycled/dp/B0BBRPM57B?crid=1YY9DNHW7WS8A&dib=eyJ2IjoiMSJ9.nY2f1UoCr38_SLgg8x0IKQt6MqnCc5_0LZ5Z3f6_qRtHkok5kwJrR05EoV-jAMWVJc71aMbT1COoa4784G21nIiaGML9EgkZijjypKwL9orEUo6x3xRaxhIGd6Rmn1-wbb-MRtIKvosKFXhcVOWRjQ.XLLsiMhUmofaVhixnNBlumZ_Fl4plh1XkY4e4o7DYas&dib_tag=se&keywords=G60+5G&qid=1705249456&sprefix=g60+5g%2Caps%2C95&sr=8-2&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=a804c53fc95bdada700f393e5812e5a0&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "X30",
        link: "https://www.amazon.co.uk/Nokia-Smartphone-warranty-security-super-fast/dp/B0BDXVF4KB?crid=G8YJU5N1EVP8&dib=eyJ2IjoiMSJ9.dZnCOq9IwYRoh4QM0tE_9m2l8G9c1hgiI9yaUQu7Y2jDlArN2wceg4DrDJvr6dvj4xvt7RSnojhnYHv7M_i6BneAfPsmw95sMSr3VrFbVr2JihRJ3GDbrY0MjfDDJmx8wXhqNcJGKYHNpWmQBcfKkw.RySw2W20Q4Mk2o_RhOQQpw7r7K11y7mf68LxBHk8D1I&dib_tag=se&keywords=nokia+x30&qid=1705249560&sprefix=nokia+x30%2Caps%2C84&sr=8-1&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=20d779b767cea192a65000a82e4fd124&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "XR21",
        link: "https://www.amazon.co.uk/Nokia-Smartphone-Dust-proof-Drop-proof-MIL-STD-810H/dp/B0C49SFCML?crid=2DR33FNLZFIZ0&dib=eyJ2IjoiMSJ9.4gWp_H7s47dbTi_nal1rEVhAVWvg197sX7MrNpib4dh3o0UXnJVPF95olHtoM8XZKI5pup3h6CSCRbKbD6UA4_9aQ4g3mcPu5JsEYeJai13odU3nFZcKOjtqX-u3xJ1CpjUNIXook9wOWBv36lQeNw.-5IUYmj6xWNkoq29ZFFk43bjIWSFMpgxEs-_CvnM7gY&dib_tag=se&keywords=nokia+xr21&qid=1705249580&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=nokia+xr21%2Caps%2C80&sr=8-1&linkCode=ll1&tag=esimdirect-21&linkId=c7bf1cbf4488b7394a5558dc871ff691&language=en_GB&ref_=as_li_ss_tl",
      },
    ],
  },
  {
    company: "Samsung",
    icon: SamsungLogo,
    phones: [
      {
        name: "Galaxy S23",
        link: "https://www.amazon.co.uk/Samsung-SM-S911B-Factory-Unlocked-Version-Black/dp/B0BSLJSCQK?crid=114O90G2UZW2&dib=eyJ2IjoiMSJ9.FmrUtIUsgb5AmWofupKuVNyEY_upa28y9siu3vIQLyFYkbNdMJSWZbXUKuQChfmoaWtB3JqVYERUzsbIq-KuZaxKcbTay1y6veNamyxbeHRkoTmKjAf5aRa3XO_LWDtodL5SKahV3Q9GIVBrU7E_GA.KC58lY085_4m9zRDaz3qP3Qurpt3iCj02MbLJGXYbFw&dib_tag=se&keywords=Galaxy+S23&qid=1705249605&sprefix=galaxy+s23%2Caps%2C88&sr=8-3&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=f198c8e6e4ce40a459fd1d53afc18670&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Galaxy S22",
        link: "https://www.amazon.co.uk/Samsung-Galaxy-Android-Smartphone-Phantom/dp/B09NRRVPZ7?crid=159OTXZDIF72F&dib=eyJ2IjoiMSJ9.RB_kH0c8P1kZkEMgbjecsi3pWrUOHibBTl1ToMQZSsEFjrJ8cqeGXGHADOREUhWErU_Y7Q7nMSyf9SIaF6jqe2bATlpAelm92COtrTUSVCbRQA1RzhiZvobgeFlYRK_aiMt5zr7dlzWLy1JYWCXMow.yF3wVzOWOJpB9C06dtRvZlWd57R6V1MmdXwjYwYAxnc&dib_tag=se&keywords=Galaxy+S22&qid=1705249627&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=galaxy+s22%2Caps%2C90&sr=8-1&linkCode=ll1&tag=esimdirect-21&linkId=9c48f51a1db34a224c9373501d3a14b1&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Galaxy S21",
        link: "https://www.amazon.co.uk/Samsung-Galaxy-128GB-Phantom-Renewed-Violet/dp/B092B4ZT1L?crid=RM5SLCTJNB2A&dib=eyJ2IjoiMSJ9.O2D3lG8b7he2eyPtNx4MpjVhYYGbwlFdi8yEbUuZ3v79rT4K89YunywVuGOThSvl5yps2hn6cA8ro-i3JRTTm6za3CK9jgW4EgnZ-qOa1S-FhReoaE6x1qVL9xgNoQkcnatvFpJ-vTWs1vddfoUs8Q.dnK_RuYw4qfAeDuz2cZWbyiPlFln489VnKp56Z8jkSA&dib_tag=se&keywords=Galaxy+S21&qid=1705249652&sprefix=galaxy+s21%2Caps%2C90&sr=8-1&linkCode=ll1&tag=esimdirect-21&linkId=156246b4aad5e7de4334ebbe581add84&language=en_GB&ref_=as_li_ss_tl",
      },
      {
        name: "Galaxy S20",
        link: "https://www.amazon.co.uk/Samsung-Galaxy-S20-FE-Smartphone/dp/B08GPN5C3G?crid=32A6W3B3H41W6&dib=eyJ2IjoiMSJ9.KIvFWsZAooEX0H0Vduqjsv6cwdBtzXzmQ8H8a4rtaWD-0cZRGxqWpgR1epsiKmxYCfZV6spXPPG-hKtLaltM9wo0PeXDSNJxDmoypZnHAx1BFiAEu1mfFicHOZQvQhC7_hzsDUjFQRiu8FwZ-wg8mg.Nhi1zUgFHabkd8qR8VyFf-8UEo4zz_xL8XzrCf8WMR4&dib_tag=se&keywords=Galaxy+S20&qid=1705249677&sprefix=galaxy+s20%2Caps%2C81&sr=8-1&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&linkCode=ll1&tag=esimdirect-21&linkId=5c2f9a83924689a94941506140e5693e&language=en_GB&ref_=as_li_ss_tl",
      },
    ],
  },
]
