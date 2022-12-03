---
title: "Introduction"
description: "What is Meshlink?"
---

# Introduction

<h2>Ya wanna know what this is all about? Well, here's the skinny.</h2>

Meshlink was created in the context of my Maturity work, which was around the theme of "Internet of Things". With the recent events concerning censorship and privacy, especially in Hong Kong with the [2019-2020 protests](https://en.wikipedia.org/wiki/2019-2020_Hong_Kong_protests), I wanted to create something that could be used to circumvent censorship and provide a way for people to communicate with each other without the need for a centralized server.
This project is heavily inspired by [Bridgefy](https://bridgefy.me/), which is a mesh messaging app.

### Yeah that sounds great, but what is Mesh Networking?

[Mesh networking](https://en.wikipedia.org/wiki/Mesh_networking) is a type of networking where each node is connected to each other node. This means that each node can communicate with each other node, and that there is no need for a centralized server. This is in contrast to a [client-server model](https://en.wikipedia.org/wiki/Client-server_model), where each node is connected to a central server, and the server is responsible for relaying messages between nodes.

### Why is Mesh Networking important?

Nowadays, we are heavily reliant on centralized servers. This is especially true for messaging apps, such as [WhatsApp](https://whatsapp.com), where all messages are sent to a central server, which then relays the messages to the intended recipient. This means that the server has access to all messages, and can censor them if they so choose. This is a problem, especially in countries where the government is oppressive and censors the internet. This is why mesh networking is important, as it allows people to communicate with each other without the need for a centralized authority.

### How does this work?

Meshlink is an Android app (iOS version is not planned yet) that uses [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) (BLE) to communicate with other devices. Each device initally generates a public/private key pair, which is used to encrypt messages. The public key is then broadcasted to other devices, and the private key is stored locally. When a device wants to send a message, it generates an 256 bits [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) key, which is used to encrypt the message. The AES key is then encrypted using the public key of the recipient, and the encrypted AES key and the encrypted message are sent to the recipient. The recipient then decrypts the AES key using their private key, and uses the AES key to decrypt the message.

### But... Isn't BLE's range too short?

Yes, BLE's range is short. However, this is not a problem, as messages can hop from device to device. This means that if a device is out of range of another device, the message will be relayed to another device that is in range of the recipient. This is done using a [Controlled Flooding](https://en.wikipedia.org/wiki/Controlled_flooding) algorithm. Each message has a [TTL (Time To Live)](https://fr.wikipedia.org/wiki/Time_to_Live) value, which is decremented by 1 each time the message is relayed. When the TTL reaches 0, the message is discarded. This means that messages will not be relayed forever, and will eventually reach their destination.
