let blogs = [
  {
    title: "Uploading files to Arweave using arweave.js",
    description:
      "Learn how to confidently upload files to Arweave using the Arweave.js SDK.",
    link: "https://medium.com/@calc1f4r/uploading-files-to-arweave-using-arweave-js-1102f8da5663",
  },
  {
    title: "The Ultimate Guide to Port Scanning using Nmap | Nmap Notes",
    description:
      "A comprehensive guide to using Nmap for network discovery, port scanning, and vulnerability detection.",
    image:
      "https://hacklido.com/assets/files/2023-06-01/1685628833-697225-nmap.jpg",
    link: "https://hacklido.com/blog/464-the-ultimate-guide-to-port-scanning-using-nmap-nmap-notes",
  },
  {
    title:
      "Linux for hackers - Part #1 | Introduction to Linux and basics for hackers",
    description:
      "An introduction to Linux essentials for hackers, covering command-line skills, file systems, and security basics.",
    link: "https://hacklido.com/blog/447-linux-for-hackers-part-1-introduction-to-linux-and-basics-for-hackers",
    image:
      "https://hacklido.com/assets/files/2023-05-25/1684997746-247329-linux-for-hackers-1.png",
  },
  {
    title: "Linux for hackers - Part #2 | Linux Process and Storage Management",
    description:
      "Dive into Linux processes, their management, and storage/partition handling for effective hacking.",
    link: "https://hacklido.com/blog/474-linux-for-hackers-part-2-linux-process-and-storage-management",
    image:
      "https://hacklido.com/assets/files/2023-06-04/1685902129-713451-linux-for-hackers.png",
  },
  {
    title:
      "Linux for hackers - Part #3 | Logical Volume Management and Managing Basic Hardware devices",
    description:
      "Explore Logical Volume Management and basic hardware device management in Linux for enhanced hacking capabilities.",
    link: "https://hacklido.com/blog/482-linux-for-hackers-part-3-logical-volume-management-and-managing-basic-hardware-devices",
    image:
      "https://hacklido.com/assets/files/2023-06-08/1686204789-140049-linux-for.png",
  },
  {
    title:
      "Linux for hackers - Part #4 | Network Scanning and Enumeration with Linux",
    description:
      "Learn networking and security essentials in Linux, including IP management, routing, and intrusion detection.",
    link: "https://hacklido.com/blog/486-linux-for-hackers-part-4-network-scanning-and-enumeration-with-linux",
    image:
      "https://hacklido.com/assets/files/2023-06-13/1686618507-371406-image.png",
  },
  {
    title: "Linux for hackers - Part #6 | Digital Forensics with Linux",
    description:
      "An overview of digital forensics using Linux, focusing on evidence handling and analysis in investigations.",
    link: "https://hacklido.com/blog/490-linux-for-hackers-part-5-digital-forensics-with-linux",
    image:
      "https://hacklido.com/assets/files/2023-06-14/1686762045-656490-linux-for-3.png",
  },
  {
    title: "Burpsuite 101: Introduction and Installation",
    description:
      "Get started with Burp Suite, exploring its installation and fundamental features for security testing.",
    link: "https://hacklido.com/blog/621-burpsuite-101-introduction-and-installation",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1697189974079/edabe5bd-6638-474b-8311-15a58231d782.png",
  },
  {
    title: "Burp Suite 101: Exploring Burp Proxy and Target Specification",
    description:
      "Deepen your knowledge of Burp Proxy and target scoping to enhance your web application security tests.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1697307344546/8e15b4ac-10a5-4e86-bb1a-9751279dde99.png",
    link: "https://hacklido.com/blog/625-burp-suite-101-exploring-burp-proxy-and-target-specification",
  },
  {
    title: "Burpsuite 101: Exploring Burp Repeater and Burp Comparer",
    description:
      "Learn how to use Burp Repeater and Comparer to optimize your HTTP requests and analyze responses effectively.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1697359842360/44820d09-1b35-4017-90e8-e35027fd4a93.png",
    link: "https://hacklido.com/blog/628-burpsuite-101-exploring-burp-repeater-and-burp-comparer",
  },
  {
    title: "Burpsuite 101 : Going deep Into intruder",
    description:
      "Master Burp Intruder to automate web application testing and discover vulnerabilities efficiently.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1698672013364/10b3bd93-9c7e-4373-b6fb-cd608108583b.png",
    link: "https://hacklido.com/blog/631-burpsuite-101-going-deep-into-intruder",
  },
  {
    title: "Beginner's Guide to Wireless Hacking #1 | From Signals to Secrets",
    description:
      "Explore the basics of Wi-Fi architecture, vulnerabilities, and exploitation techniques in wireless hacking.",
    image:
      "https://hacklido.com/assets/files/2023-06-19/1687203671-749444-linux-for-12.png",
    link: "https://hacklido.com/blog/494-beginners-guide-to-wireless-hacking-1-from-signals-to-secrets",
  },
  {
    title: "A Beginner's Guide to Wireless Hacking #2 | Spoofing",
    description:
      "Understand spoofing techniques to impersonate networks or devices for unauthorized access and system compromise.",
    image:
      "https://hacklido.com/assets/files/2023-06-21/1687324017-754669-wireless-hacking.png",
    link: "https://hacklido.com/blog/502-a-beginners-guide-to-wireless-hacking-2-spoofing",
  },
  {
    title: "A Beginner's Guide to Wireless Hacking #3| Hacking WEP Protocol",
    description:
      "Learn about the WEP protocol, its vulnerabilities, and methods to crack WEP using tools like airplay-ng.",
    image:
      "https://hacklido.com/assets/files/2023-06-25/1687679010-314100-linux-for-compressed.jpg",
    link: "https://hacklido.com/blog/506-a-beginners-guide-to-wireless-hacking-3-hacking-wep-protocol",
  },
  {
    title: "A Beginner's Guide to Wireless Hacking #4 | Hacking WPA",
    description:
      "Dive into WPA encryption, hacking methods, and strategies to protect your network from WPA attacks.",
    image:
      "https://hacklido.com/assets/files/2023-07-01/1688196743-678997-linux-for-10.png",
    link: "https://hacklido.com/blog/520-a-beginners-guide-to-wireless-hacking-4-hacking-wpa",
  },
  {
    title:
      "Beginner's Guide to Wireless Hacking #5 | Exploring Evil Twin Attacks",
    description:
      "Explore evil twin attacks, how they work, and measures to safeguard against these deceptive network intrusions.",
    image:
      "https://hacklido.com/assets/files/2023-08-05/1691278984-111549-linux-for.png",
    link: "https://hacklido.com/blog/582-beginners-guide-to-wireless-hacking-5-exploring-evil-twin-attacks",
  },
  {
    title:
      "Python for Hackers #1 | SSH Bruteforcer using Asynchronous Programming",
    description:
      "Create an SSH bruteforcer in Python leveraging asynchronous programming for efficient security testing.",
    link: "https://hacklido.com/blog/525-python-for-hackers-1-ssh-bruteforcer-using-asynchronous-programming",
    image:
      "https://hacklido.com/assets/files/2023-07-04/1688453228-394850-your-wish-if-u-want-to-take-this-compressed.jpg",
  },
  {
    title:
      "Python for Hackers #2 | FTP Bruteforcer using asynchronous Programming",
    description:
      "Develop an FTP bruteforcer in Python with asynchronous techniques to enhance performance and effectiveness.",
    link: "https://hacklido.com/blog/526-python-for-hackers-2-ftp-bruteforcer-using-asynchronous-programming",
    image:
      "https://hacklido.com/assets/files/2023-07-10/1688991148-975495-your-wish-if-u-want-to-take-this-3-compressed.jpg",
  },
  {
    title:
      "Python for Hackers #3 | Building Directory Buster using asynchronous programming",
    description:
      "Build a Directory Buster tool in Python using asynchronous programming to efficiently discover hidden web resources.",
    link: "https://hacklido.com/blog/565-python-for-hackers-3-building-directory-buster-using-asynchronous-programming",
    image:
      "https://hacklido.com/assets/files/2023-08-05/1691227593-766237-your-wish-if-u-want-to-take-this-5-compressed.jpg",
  },
  {
    title: "Python For Hackers #4 | Building Arp Spoofing/Posioning Script",
    description:
      "Create an ARP spoofing script in Python to perform network attacks by poisoning ARP caches.",
    link: "https://hacklido.com/blog/580-python-for-hackers-4-building-arp-spoofingposioning-script",
    image:
      "https://hacklido.com/assets/files/2023-08-06/1691324389-961355-your-wish-if-u-want-to-take-this-6-compressed.jpg",
  },
  {
    title: "Python For Hacker #5 | Building A Multithreaded Network Scanner",
    description:
      "Develop a multithreaded network scanner in Python to identify active clients and open ports within a subnet.",
    link: "https://hacklido.com/blog/642-python-for-hacker-5-building-a-mutlithreaded-network-scanner",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1698673241597/e323637b-3804-4e2b-8ed2-758b57d0160e.png",
  },
  {
    title: "Python For Hackers #6 | Building A Recursive Web Crawler",
    description:
      "Build a recursive web crawler in Python to efficiently scrape and analyze web page content.",
    link: "https://hacklido.com/blog/647-python-for-hackers-6-building-a-recursive-web-crawler",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1698841137688/bfa2c016-d580-4694-ab5b-b86ffabd6078.png",
  },
  {
    title:
      "Python for Hackers #7 | Building a Multithreaded Subdomain Bruteforcer",
    description:
      "Create a multithreaded subdomain bruteforcer in Python to discover hidden subdomains of target domains.",
    link: "https://hacklido.com/blog/653-python-for-hackers-7-building-a-multithreaded-subdomain-bruteforcer",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1698862505870/4708f496-0351-4b1e-b181-01765824534c.png",
  },
  {
    title: "Python For Hackers #8 | Building A PDF Password Brute Forcer",
    description:
      "Develop a PDF password brute forcer in Python using rainbow table attacks to unlock protected PDF files.",
    link: "https://hacklido.com/blog/654-python-for-hackers-8-building-a-pdf-password-brute-forcer",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1699251393104/6c100b9c-ed0f-46f7-b812-0818433955cf.png",
  },
  {
    title: "Python For Hackers #9 | Building a Hash Cracker",
    description:
      "Build a hash cracker in Python to decrypt hashed values and retrieve their original data.",
    link: "https://hacklido.com/blog/655-python-for-hackers-9-building-a-hash-cracker",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1699282954297/9b3ecf37-b8cd-46ec-94e4-44e02359b691.png",
  },
  {
    title: "Python For hackers #10 | Building a Reverse Shell",
    description:
      "Create a reverse shell in Python to enable remote command execution on target systems.",
    link: "https://hacklido.com/blog/656-python-for-hackers-10-building-a-reverse-shell",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1699289410489/a8b74873-8f7c-4fb8-adf9-68c7da0d0c6f.png",
  },
];
