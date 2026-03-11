// title authors venue [doi|link] [pdf] [note]
const papers = [
  // TODO
  {
    title: "PIM-ORAM: Towards Oblivious RAM Primitives in Commodity Processing-In-Memory",
    authors: "Byeongsu Woo, Kha Dinh Duy, Youngkwang Han, Brent Byunghoon Kang and Hojoon Lee",
    venue: "IEEE Annual Computer Security Applications Conference (ACSAC) 2025",
    doi: "10.1109/ACSAC67867.2025.00083",
    pdf: "pim-oram",
  },
  {
    title: "CF-DETR: Coarse-to-Fine Transformer for Real-Time Object Detection",
    authors: "Woojin Shin, Donghwa Kang, Byeongyun Park, Brent Byunghoon Kang, Jinkyu Lee and Hyeongboo Baek",
    venue: "IEEE Real-Time Systems Symposium (RTSS) 2025",
    doi: "10.1109/RTSS66672.2025.00026",
  },
  {
    title: "BankTweak: Adversarial Attack Against Multi-Object Trackers by Manipulating Feature Banks",
    authors: "Woojin Shin, Donghwa Kang, Daejin Choi, Brent Byunghoon Kang, Jinkyu Lee and Hyeongboo Baek",
    venue: "International Joint Conference on Artificial Intelligence (IJCAI) 2025",
    doi: "10.24963/ijcai.2025/206",
  },
  {
    title: "Interstellar: Fully Partitioned and Efficient Security Monitoring Hardware Near a Processor Core for Protecting Systems against Attacks on Privileged Software",
    authors: "YongHo Song, Byeongsu Woo, Youngkwang Han and Brent ByungHoon Kang",
    venue: "ACM SIGSAC Conference on Computer and Communications Security (CCS) 2024",
    doi: "10.1145/3658644.3690247",
  },
  {
    title: "Optimus: association-based dynamic system call filtering for container attack surface reduction",
    authors: "Seungyong Yang, Brent Byunghoon Kang and Jaehyun Nam",
    venue: "Journal of Cloud Computing 2024",
    doi: "10.1186/s13677-024-00639-3",
  },
  // TODO
  {
    title: "GENESIS: A Generalizable, Efficient, and Secure Intra-kernel Privilege Separation",
    authors: "Seongman Lee, Seoye Kim, Chihyun Song, Byeongsu Woo, Eunyeong Ahn, Junsu Lee, Yeongjin Jang, Jinsoo Jang, Hojoon Lee and Brent Byunghoon Kang",
    venue: "ACM/SIGAPP Symposium on Applied Computing (SAC) 2024",
    doi: "10.1145/3605098.3635951",
  },
  {
    title: "SuM: Efficient shadow stack protection on ARM Cortex-M",
    authors: "Wonwoo Choi, Minjae Seo, Seongman Lee and Brent Byunghoon Kang",
    venue: "Computers & Security 2023",
    doi: "10.1016/j.cose.2023.103568",
    pdf: "sum",
  },
  {
    title: "EnclaveVPN: Toward Optimized Utilization of Enclave Page Cache and Practical Performance of Data Plane for Security-Enhanced Cloud VPN",
    authors: "Jaemin Park and Brent Byunghoon Kang",
    venue: "International Symposium on Research in Attacks, Intrusions and Defenses (RAID) 2023",
    doi: "10.1145/3607199.3607210",
  },
  // TODO
  {
    title: "Harnessing the x86 Intermediate Rings for Intra-Process Isolation",
    authors: "Hojoon Lee, Chihyun Song and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2022",
    doi: "10.1109/TDSC.2022.3192524",
    pdf: "lotr-tdsc",
  },
  {
    title: "3rdParTEE: Securing Third-Party IoT Services Using the Trusted Execution Environment",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "IEEE Internet of Things (IoT) Journal 2022",
    doi: "10.1109/JIOT.2022.3152555",
    pdf: "3rdpartee",
  },
  {
    title: "EmuID: Detecting presence of emulation through microarchitectural characteristic on ARM",
    authors: "Yeseul Choi, Yunjong Jeong, Daehee Jang, Brent Byunghoon Kang and Hojoon Lee",
    venue: "Computers & Security 2021",
    doi: "10.1016/j.cose.2021.102569",
    pdf: "emuid",
  },
  {
    title: "SaVioR: Thwarting Stack-Based Memory Safety Violations by Randomizing Stack Layout",
    authors: "Seongman Lee, Hyeonwoo Kang, Jinsoo Jang and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2021",
    doi: "10.1109/TDSC.2021.3063843",
    pdf: "savior-pdf-ack-cnu",
  },
  {
    title: "Agamotto: Accelerating Kernel Driver Fuzzing with Lightweight Virtual Machine Checkpoints",
    authors: "Dokyung Song, Felicitas Hetzelt, Jonghwan Kim, Brent Byunghoon Kang, Jean-Pierre Seifert and Michael Franz",
    venue: "USENIX Security Symposium (USENIX Security) 2020",
    link: "https://www.usenix.org/conference/usenixsecurity20/presentation/song",
  },
  {
    title: "AI-HydRa: Advanced hybrid approach using random forest and deep learning for malware classification",
    authors: "Suyeon Yoo, Sungjin Kim, Seungjae Kim and Brent Byunghoon Kang",
    venue: "Information Sciences 2020",
    doi: "10.1016/j.ins.2020.08.082",
  },
  {
    title: "SelMon: reinforcing mobile device security with self-protected trust anchor",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "International Conference on Mobile Systems, Applications, and Services (MobiSys) 2020",
    doi: "10.1145/3386901.3389023",
    note: "<b>Honourable Mention</b>",
  },
  {
    title: "Value-Based Constraint Control Flow Integrity",
    authors: "Dongjae Jung, Minsu Kim, Jinsoo Jang and Brent Byunghoon Kang",
    venue: "IEEE Access 2020",
    doi: "10.1109/ACCESS.2020.2980026",
  },
  {
    title: "The Image Game: Exploit Kit Detection Based on Recursive Convolutional Neural Networks",
    authors: "Suyeon Yoo, Sungjin Kim and Brent Byunghoon Kang",
    venue: "IEEE Access 2020",
    doi: "10.1109/ACCESS.2020.2967746",
  },
  {
    title: "On the Analysis of Byte-Granularity Heap Randomization",
    authors: "Daehee Jang, Jonghwan Kim, Hojoon Lee, Minjoon Park, Yunjong Jung, Minsu Kim and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2019",
    doi: "10.1109/TDSC.2019.2947913",
    pdf: "ruma",
  },
  {
    title: "Rethinking anti-emulation techniques for large-scale software deployment",
    authors: "Daehee Jang, Yunjong Jeong, Sungman Lee, Minjoon Park, Kuenhwan Kwak, Donguk Kim and Brent Byunghoon Kang",
    venue: "Computers & Security 2019",
    doi: "10.1016/j.cose.2019.02.005",
    pdf: "emul-detect",
  },
  {
    title: "POLaR: Per-Allocation Object Layout Randomization",
    authors: "Jonghwan Kim, Daehee Jang, Yunjong Jeong and Brent Byunghoon Kang",
    venue: "IEEE/IFIP International Conference on Dependable Systems and Networks (DSN) 2019",
    doi: "10.1109/DSN.2019.00058",
    pdf: "dsn19-Kim",
  },
  {
    title: "Revisiting the ARM Debug Facility for OS Kernel Security",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "Design Automation Conference (DAC) 2019",
    doi: "10.1145/3316781.3317897",
  },
  {
    title: "In-process Memory Isolation Using Hardware Watchpoint",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "Design Automation Conference (DAC) 2019",
    doi: "10.1145/3316781.3317843",
  },
  {
    title: "Securing a communication channel for the trusted execution environment",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "Computers & Security 2019",
    doi: "10.1016/j.cose.2019.01.012",
    pdf: "seccom19",
  },
  {
    title: "SGX-LEGO: Fine-grained SGX controlled-channel attack and its countermeasure",
    authors: "Deokjin Kim, Daehee Jang, Minjoon Park, Yunjong Jeong, Jonghwan Kim, Seokjin Choi and Brent Byunghoon Kang",
    venue: "Computers & Security 2018",
    doi: "10.1016/j.cose.2018.12.001",
    pdf: "sgx-lego",
  },
  {
    title: "Lord of the x86 Rings: A Portable User Mode Privilege Separation Architecture on x86",
    authors: "Hojoon Lee, Chihyun Song and Brent Byunghoon Kang",
    venue: "ACM SIGSAC Conference on Computer and Communications Security (CCS) 2018",
    doi: "10.1145/3243734.3243748",
  },
  {
    title: "FriSM: Malicious Exploit Kit Detection via Feature-Based String-Similarity Matching",
    authors: "Sungjin Kim and Brent ByungHoon Kang",
    venue: "Security and Privacy in Communication Networks (SecureComm) 2018",
    link: "https://www.researchgate.net/publication/329975671_FriSM_Malicious_Exploit_Kit_Detection_via_Feature-Based_String-Similarity_Matching_14th_International_Conference_SecureComm_2018_Singapore_Singapore_August_8-10_2018_Proceedings_Part_I",
  },
  {
    title: "Malicious URL protection based on attackers' habitual behavioral analysis",
    authors: "Sungjin Kim, Jinkook Kim and Brent ByungHoon Kang",
    venue: "Computers & Security 2018",
    doi: "10.1016/j.cose.2018.01.013",
    pdf: "1-s2.0-S0167404818300348-main",
  },
  {
    title: "Retrofitting the Partially Privileged Mode for TEE Communication Channel Protection",
    authors: "Jinsoo Jang and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2018",
    doi: "10.1109/TDSC.2018.2840709",
    pdf: "tfence_TDSC",
  },
  {
    title: "A dynamic per-context verification of kernel address integrity from external monitors",
    authors: "Hojoon Lee, Minsu Kim, Yunheung Paek and Brent Byunghoon Kang",
    venue: "Computers & Security 2018",
    doi: "10.1016/j.cose.2018.02.013",
    pdf: "1-s2.0-S0167404818301421-main",
  },
  {
    title: "Domain Isolated Kernel: A lightweight sandbox for untrusted kernel extensions",
    authors: "Valentin J.M. Manès, Daehee Jang, Chanho Ryu and Brent Byunghoon Kang",
    venue: "Computers & Security 2018",
    doi: "10.1016/j.cose.2018.01.009",
    pdf: "dikernel",
  },
  {
    title: "Hacking in Darkness: Return-oriented Programming against Secure Enclaves",
    authors: "Jaehyuk Lee, Jinsoo Jang, Yeongjin Jang, Nohyun Kwak, Yeseul Choi, Changho Choi, Taesoo Kim, Marcus Peinado and Brent Byunghoon Kang",
    venue: "USENIX Security Symposium (USENIX Security) 2017",
    link: "https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/lee-jaehyuk",
  },
  {
    title: "S-OpenSGX: A system-level platform for exploring SGX enclave-based computing",
    authors: "Changho Choi, Nohyun Kwak, Jinsoo Jang, Daehee Jang, Kuenwhee Oh, Kyungsoo Kwag and Brent Byunghoon Kang",
    venue: "Computers & Security 2017",
    doi: "10.1016/j.cose.2017.06.006",
    pdf: "SystemOpenSGX",
  },
  {
    title: "KI-Mon ARM: A Hardware-Assisted Event-triggered Monitoring Platform for Mutable Kernel Object",
    authors: "Hojoon Lee, Hyungon Moon, Ingoo Heo, Daehee Jang, Jinsoo Jang, Kihwan Kim, Yunheung Paek and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2017",
    doi: "10.1109/TDSC.2017.2679710",
    pdf: "KIMONARM",
  },
  {
    title: "Invi-server: Reducing the attack surfaces by making protected server invisible on networks",
    authors: "Jaehyun Park, Jiseong Noh, Myungchul Kim and Brent Byunghoon Kang",
    venue: "Computers & Security 2017",
    doi: "10.1016/j.cose.2017.02.012",
    pdf: "Invi-server_Reducing_the_attack",
  },
  {
    title: "PrivateZone: Providing a Private Execution Environment Using ARM TrustZone",
    authors: "Jinsoo Jang, Changho Choi, Jaehyuk Lee, Nohyun Kwak, Seongman Lee, Yeseul Choi and Brent Byunghoon Kang",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC) 2016",
    doi: "10.1109/TDSC.2016.2622261",
    pdf: "PrivateZone_Providing_a_Private_Execution_Environment_using_ARM_TrustZone",
  },
  {
    title: "On-demand bootstrapping mechanism for isolated cryptographic operations on commodity accelerators",
    authors: "Yonggon Kim, Ohmin Kwon, Jinsoo Jang, Seongwook Jin, Hyeongboo Baek, Brent Byunghoon Kang and Hyunsoo Yoon",
    venue: "Computers & Security 2016",
    doi: "10.1016/j.cose.2016.06.006",
    pdf: "On-demand_Bootstrapping_Mechanism_for_Isolated_Cryptographic_Operations_on_Commodity_Accelerators",
  },
  {
    title: "",
    authors: "",
    venue: "",
    doi: "",
    pdf: "",
  },
];

document.querySelector("#papers-1").innerHTML = `${
  papers.splice(0, 5).map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "hidden"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "hidden"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "hidden"}" href="publications/${p.pdf}.pdf">[PDF]</a>
    </p>
    <p>${p.note || ""}</p>
  `).join("<p><br></p>")
}`;

document.querySelector("#papers-2").innerHTML = `${
  papers.splice(0, 3).map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "hidden"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "hidden"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "hidden"}" href="publications/${p.pdf}.pdf">[PDF]</a>
    </p>
    <p>${p.note || ""}</p>
  `).join("<p><br></p>")
}`;

document.querySelector("#papers").innerHTML = `${
  papers.map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "hidden"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "hidden"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "hidden"}" href="publications/${p.pdf}.pdf">[PDF]</a>
    </p>
    <p>${p.note || ""}</p>
  `).join("<p><br></p>")
}`;
