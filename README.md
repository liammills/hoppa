# Hoppa

Hop to net zero with Hoppa!

## Contents

1. [Whats's the Problem?](#what's-the-problem?)
2. [Whats's the Solution?](#what's-the-solution?)
3. [Video](#video)
5. [Solution Architecture](#architectural-diagram)
6. [Technology](#technology)
7. [Getting started](#getting-started)
8. [License](#license)

## What's the problem?

The first mention in parliament of ‘greenhouse gas’ occurred in 1986, yet decades later the government is still not proposing anything near appropriate.

We can no longer rely on policy in our race to reduce pollution. We’re in a race against time. Individuals need to be given the power and autonomy to contribute meaningfully. 

And they want to help...

Studies have shown that awareness is not the issue. People want to learn more about how to lead more sustainable lifestyles and reduce their carbon emissions. But due to the abstract nature of individual impact and scientific complexity of carbon offsetting and renewable energy, they are often left feeling overwhelmed and debilitated.

Meet Eva. She is a 30 year old HR manager who is looking to make her workplace more sustainable. She knows that her colleagues are concerned and aware of the importance of climate change and carbon usage, but they don’t really know what impact they can make and what exactly they can do to help as individuals.

How can Eva empower her colleagues to...
- Easily understand how to make more conscious environmental / climate decisions?
- Reduce their carbon emissions in their day to day?
- Learn more about other ways they can contribute such as carbon offsetting?

## What's the solution?

Introducing Hoppa, the Strava for sustainable living. 

Aimed at uniting individuals within organisations, it takes a holistic approach to altering behaviours to reduce carbon emissions.

**Eva:** So will this decrease my carbon emissions? 

**Hoppa:** We make it easy for users to track, reduce and remove CO2 emissions. An estimate of your toad-al emissions is given with a breakdown of the data from your transport, energy and food. Monthly challenges are set to provide you with some inspiration and motivation.

**Eva:** Sounds good, but will I need to manually input all this data? Sounds like a lot of effort 

**Hoppa:** Not at all! Hoppa is designed to make it toad-aly easy! We use GPS technology to automatically calculate your emissions from transport, energy and food. Through the Google Maps and Transit API we provide real time prompts to easily input your commute data, reducing the cognitive load off of making climate conscious decisions.

**Eva:** So where do my work colleges come into the equation?

**Hoppa:** Hoppa takes a community based approach. We hope this will provide additional incentive and discussion of emission reduction and offsetting within workplaces. 

**Eva:** This sounds fun! 

**Hoppa:** Well it gets more fun, you can even compete with your co-workers through leaderboards, organisational goals and regular updates on Slack on how your company is tracking with their carbon emission!

### Business model
We want Hoppa to be self-sustaining - as such we our income channels are through brokerage fees for carbon off-setting purchasing and a freemium model. We’ll be targeting HR at management level positions, such as Eva, to integrate Hoppa into their organisation to improve their CSR and make a real difference.

[show features that are free and those that are not]

### Competitors
Hoppa differentiates to the market and its competitors by being both authentic and easy to use, allowing for organisations to improve their CSR in a genuine way. Through the building of communities, it encourages people to track their carbon emissions through small challenges and upload their personal progress with a wider network.

### Social impact
We know that people are starting talk more about climate change, but we understand that it can be difficult and confusing when you’re doing it alone. 

Hoppa makes it much more motivating to understand how the changes you make relate to those you colleagues are making, and how it all contributes to a larger end goal. This will hopefully empower more people to engage and make it less daunting to take the little actions that can help.

So if we get more individuals to make small lifestyle changes, this can then lead to change from so many others and thus take a huge leap in the climate race.

We as a Country have agreed to reach Net-Zero Carbon Emissions by 2050, therefore there is a onus on each and every one of us to take collective action. As such, we hope that by adopting Hoppa into their lifestyle, people like Eva will be better equipped to understand their carbon emissions and take the leap to hop to Net-Zero.

## Video
[![278695497_390735432906995_2835999082292929770_n](https://user-images.githubusercontent.com/54311311/164878530-c494c5db-da06-4877-b649-bd796085d027.png)](https://www.canva.com/design/DAE-p0ugoCA/uw7aS_UoHET4seBCL08kTQ/watch?utm_content=DAE-p0ugoCA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
*hoppa - Codebrew 2022 Entry*

## Architectural Diagram
![architecture](https://user-images.githubusercontent.com/54311311/164878409-6b70d8fa-4bfd-4f7a-a1e0-eef5e884a5f8.png)

Hoppa is run on a Node engine with a MongoDB database. Data is aggregated from various sources (external API's as well as mobile device data) and analysed through a Python data app on the backend.

## Technology

**Cars**
- [Edmunds Vehicle API](https://developer.edmunds.com/api-documentation/vehicle/)

**Javascript**
- [Vue.js](https://vuejs.org/)
- [Node.js](https://nodejs.org/en/)
- [Chart.js](https://www.chartjs.org/)

## Getting started

Use the following steps to get Hoppa up and running.

### Prerequisite

- Install [Node.js](https://nodejs.org/en/)
- Clone the [repository](https://github.com/liammills/hoppa).
- Install and configure [Android Studio](https://developer.android.com/studio) to emulate in Android

Note:
- To emulate in iOS, you must be on a macOS device with [XCode](https://developer.apple.com/xcode/) installed.

### Run it

In your terminal, from the root directory:
1. Run `npm install -g @ionic/cli cordova-res`.
2. Run `cd hoppa && npm i && ionic build`.
3. Run `ionic cap add android/ios`.
4. Run `ionic cap run android/ios`.


## Authors
**Bangshuo Zhu** - University of Sydney </br>
**Christina Liu** - University of Sydney </br>
**Liam Mills** - University of Sydney</br>
**Louise Zhang** - University of Technology Sydney</br>

## License

This solution is made available under the [Apache 2 License](LICENSE).
