
// Add Operating System Module
const os=require('os'); 

//This methods returns the amount of free system memory in bytes.

console.log("os.freemem(): \n",os.freemem());  

//Output : 162570240

//This method returns the home directory of the current user.

console.log("os.homedir(): \n",os.homedir()); 

//Output : /home/vinay

//This method is used to returns the hostname of the operating system.

console.log("os.hostname(): \n",os.hostname());

//Output : Vinay-Namdev

//This method returns the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.

console.log("os.endianness(): \n",os.endianness());

//Output : LE

//This method returns an array containing the 1, 5, and 15 minute load averages. The load average is a time fraction taken by system activity, calculated by the operating system and expressed as a fractional number.

console.log("os.loadavg(): \n",os.loadavg()); 

//Output : [ 1.19, 1.38, 1.31 ]

//This method returns the operating system platform of the running computer i.e.'darwin', 'win32','freebsd', 'linux', 'sunos' etc.

console.log("os.platform(): \n",os.platform()); 

//Output : linux

//This method returns the operating system release.

console.log("os.release(): \n",os.release()); 

//Output : 5.8.0-53-generic

//This method returns the operating system's default directory for temporary files.

console.log("os.tmpdir(): \n",os.tmpdir());  

//Output : /tmp

//This method returns the total amount of system memory in bytes.

console.log("os.totalmem(): \n",os.totalmem()); 

//Output : 8048230400

//This method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.

console.log("os.type(): \n",os.type());  

//Output : Linux

//This method returns the system uptime in seconds.

console.log("os.uptime(): \n",os.uptime()); 

//Output : 83817.39

// This method is used to fetch an array of objects containing information about each cpu/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the cpu/core spent in: user, nice, sys, idle, and irq).

console.log("os.cpus(): \n",os.cpus());  

//Output :

/* [
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3544,
      times: { user: 4855110, nice: 2990, sys: 1970480, idle: 71948110, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3676,
      times: { user: 4979520, nice: 5670, sys: 1757720, idle: 72015250, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3609,
      times: { user: 4914680, nice: 7500, sys: 1717000, idle: 72906480, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3423,
      times: { user: 4901980, nice: 6190, sys: 1778880, idle: 72850190, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3706,
      times: { user: 4952150, nice: 6000, sys: 1699400, idle: 72967490, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3079,
      times: { user: 5091460, nice: 6260, sys: 1756130, idle: 72157710, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3582,
      times: { user: 4965490, nice: 8980, sys: 1674590, idle: 72379760, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
      speed: 3125,
      times: { user: 4992220, nice: 3900, sys: 1664200, idle: 72618110, irq: 0 }
    }
  ] */

//This method is used to fetch the operating system CPU architecture.

console.log("os.arch(): \n",os.arch());  

//Output : x64

//This method returns a list of network interfaces.
console.log("os.networkInterfaces(): \n",os.networkInterfaces()); 

//Output : 

/* {
    lo: [
      {
        address: '127.0.0.1',
        netmask: '255.0.0.0',
        family: 'IPv4',
        mac: '00:00:00:00:00:00',
        internal: true,
        cidr: '127.0.0.1/8'
      },
      {
        address: '::1',
        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        family: 'IPv6',
        mac: '00:00:00:00:00:00',
        internal: true,
        cidr: '::1/128',
        scopeid: 0
      }
    ],
    wlo1: [
      {
        address: '192.168.0.104',
        netmask: '255.255.255.0',
        family: 'IPv4',
        mac: '90:78:41:06:f8:97',
        internal: false,
        cidr: '192.168.0.104/24'
      },
      {
        address: 'fe80::3f:1ad7:6343:ff1d',
        netmask: 'ffff:ffff:ffff:ffff::',
        family: 'IPv6',
        mac: '90:78:41:06:f8:97',
        internal: false,
        cidr: 'fe80::3f:1ad7:6343:ff1d/64',
        scopeid: 3
      }
    ]
  } */