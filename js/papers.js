// title authors venue [doi] [link] [pdf] [bib]
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
  // TODO
];

document.querySelector("#papers-1").innerHTML = `${
  papers.splice(0, 5).map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "invisible"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "invisible"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "invisible"}" href="publications/${p.pdf}.pdf">[PDF]</a>
      <a class="${p.bib ? "" : "invisible"}" href="publications/${p.bib}.bib">[BIBTEX]</a>
    </p>
  `).join("<p><br></p>")
}`;

document.querySelector("#papers-2").innerHTML = `${
  papers.splice(0, 3).map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "invisible"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "invisible"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "invisible"}" href="publications/${p.pdf}.pdf">[PDF]</a>
      <a class="${p.bib ? "" : "invisible"}" href="publications/${p.bib}.bib">[BIBTEX]</a>
    </p>
  `).join("<p><br></p>")
}`;

document.querySelector("#papers-3").innerHTML = `${
  papers.splice(0, 6).map(p => `
    <p><b>${p.title}</b></p>
    <p>${p.authors.replace(/(Brent Byunghoon Kang)/i, "<b>$1</b>")}</p>
    <p>
      ${p.venue}
      <a class="${p.doi ? "" : "invisible"}" href="https://doi.org/${p.doi}">[more]</a>
      <a class="${p.link ? "" : "invisible"}" href="${p.link}">[more]</a>
      <a class="${p.pdf ? "" : "invisible"}" href="publications/${p.pdf}.pdf">[PDF]</a>
      <a class="${p.bib ? "" : "invisible"}" href="publications/${p.bib}.bib">[BIBTEX]</a>
    </p>
  `).join("<p><br></p>")
}`;
