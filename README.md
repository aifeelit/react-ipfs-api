# F.S Engineer assignment 🚀

## **Getting started**

There are a few thing that you need to get going on this. It isn't too bad, but it will take a few minutes.

Please get sure to have the following installed:

- **[IPFS daemon](https://docs.ipfs.io/reference/)** (required for running the local IPFS node, either the GO or Js are fine)
- **[Docker](https://www.docker.com/)**
- **[NPM CLI](https://docs.npmjs.com/cli/v6)**

**1** - After we've got the above installed, we need to run `node installAll.js` ****on our terminal, this will do an `npm install` on the directories that exist.

(*If the script did not work for some reason, you should run manually `npm install` on ./client, ./proxy, and ./server*). 

**2** - Now, from the root dir, we should run `docker-compose up` for getting the redis service running. 

**3** - Almost there, we need to get the three modules going. First run `npm run dev` on **./proxy** and **./server**. And finally, run `npm start` on **./client.**

**4** - Finally, we should run our IPFS Daemon, with `ipfs daemon` from another terminal. 

If everything went well, we should have our environment ready to go. 

## Some notes

- For the log in, there's no validation required on the form, so any email/password should be good.

# Written questions

**Q:** *How would you improve this assignment for a production ready solution (e.g., security, deployment)?*

**A:** There're many things to take into account here. 

To start, I've chosen to go with Redis as a database for storing the logs and API keys. For this task, I've assumed that traffic and R/W on the Redis service wouldn't be that big, and as the required fields to store weren't that much (API Key ID, status, content-length, etc), there was no need to use something else. For a real world scenario, instead, I'd go with a NoSQL Database (ie: mongoDB). If things keep scaling up, I'd consider to keep logs separately on something like [Logstash](https://www.elastic.co/logstash). Also, I'd keep common things between repos on a separate package (ie, database models). 

Not to forget, taking advantage of .env files, (ie **secrets** are needed for a *secure* users authentication)

**Q:** Describe IPFS and compare it to other protocols e.g., HTTP?

**A: IPFS** is a protocol that relies on operating over a distributed network. It provides both a **decentralized and permanent web,** this leverages over HTTP with many benefits (DDoS protection, content-addressed storage model, high throughput, among many others).

HTTP, on the other hand, relies heavily on centralization. Data nowadays relies heavily in centralized servers and accessed by location-based addressing. Security and privacy concerns are a big thing related to this. Although it's easier for managing/scaling/securing the data, we need to also know that **control of the server** equals **control of the data,** meaning your data can be accessed/altered or even removed by any party that has control of the server.

HTTP has been great so far, but originally it wasn't designed for transferring huge amounts of data, as nowadays we are used to, like massive audio and video streaming. Major improvements had been made on the last years (more powerful computers, cloud computing), but mainly the fundamentals of infrastructure remain the same. 

IPFS, addresses this deficiencies pretty well. Through their peer to peer filesharing system, retrieving content does not need anymore to be from a remote server on the other side of the planet, but it can be from your neighbors node. IPFS provides high throughput, low latency, data distribution. It is also decentralized and secure. 

Possibilities are endless, and there're many exciting use cases!. 

Sources: 

[https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf](https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf)

[https://techcrunch.com/2015/10/04/why-the-internet-needs-ipfs-before-its-too-late/](https://techcrunch.com/2015/10/04/why-the-internet-needs-ipfs-before-its-too-late/)

[https://docs.ipfs.io/concepts/what-is-ipfs/](https://docs.ipfs.io/concepts/what-is-ipfs/)
