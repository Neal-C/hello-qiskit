# A Qiskit discovery

# Disclaimer
- I am not sponsored by IBM, nor affiliated. 
- I am sadly, not sponsored by [alice-bob](https://alice-bob.com/)

## Story

I learned about the Qiskit programming language at Vivatech 2024 by talking with the people of 'Alice & Bob' https://alice-bob.com/ . They are building the first universal quantum computer. And they have recommended it to me during our discussion.

### Notes:

- Qiskit reached 1.0 a few months ago in February 2024 and project was started in 2017.

- Quantum Information Software Kit (Qiskit) 

- Python SDK

- Python? Really? For something that might represent the future of technology and a largely anticipated technological breakthrough, they chose to base it on... Python? Ok.

- Jupyter Notebooks...

- Qiskit SDK

- Qiskit Runtime

- Qiskit is designed to be hardware agnostic. Qiskit IBM runtime connects qiskit to IBM's runtime environment so that you can access the 100 qubits+ devices.

- Qiskit patterns: 1. Map the problem to circuits and operators 2. Optimize the circuits 3. execute it on a backend 4. Post-process the results.

- QPU , Quantic Processing Unit

- qubits

- You have the option to access IBM Quantum hardware through either IBM Quantum Platform or IBM Cloud.

- you can also access quantum processors with REST APIs, enabling you to work with QPUs using any programming language or framework.

- Qiskit uses OpenQASM

- OpenQASM. Intermediate representation for quantum instructions. It is designed to be an intermediate representation that can be used by higher-level compilers to communicate with quantum hardware. (think LLVM but for quantum, or Assembly but for quantum)

OpenQASM is an imperative language for near-term quantum algorithms and applications. It supports classical control flow, data types, and pulse-level definitions, and aims to be an intermediate representation for higher-level compilers.

- In a quantum program, quantum circuits are the native format in which to represent quantum instructions, and operators represent the observables to be measured. When creating a circuit, you'll usually create a new QuantumCircuit object, then add instructions to it in sequence.

- a Bell state,  is a state wherein two qubits are fully entangled with each other.


Requirements:

A Quantum computer

### IBM Quantum Platform

They offer real quantum hardware.

Open Plan - Run your quantum circuits on IBM quantum systems for free (up to 10 minutes quantum time per month. (yeah I know, they're being cheap on us)).


### Instructions

Requirements: Docker or ( python >=3.9.19 and qiskit =1.2.0 )

To run anything more than ```version.ipynb```,  or ```bell-state.ipynb``` you need to have an api token from IBM Quantum Platform. 
those example run on the local simulator.



if you do have an api token, you must run ```qiskit.ipynb``` first before running ```ghz_state.ipynb```.

replace the token where it's written "replace-with-your-api-token-here" in the notebooks.

else you will get this error:

```
--> 197 raise AccountNotFoundError("Unable to find account.")

AccountNotFoundError: 'Unable to find account.'
```

#### With Docker

clone my repository

```shell
git clone git@github.com:Neal-C/hello-qiskit.git
cd hello-qiskit
```

build and run with Docker

```shell
# build image
docker build -t neal-c-qiskit:latest .
```

```shell
# run image
docker run --name neal-c-qiskit -p 8888:8888 -d neal-c-qiskit:latest
```

```shell
# open in browser
xdg-open http://localhost:8888
```

tour:
- check the version.ipynb notebook to see what version of Qiskit you have installed. it should be the latest version of whenever you built the image.
- 2 qubit bell state on local simulator in bell_state.ipynb

#### With qiskit installed locally

Follow official install instructions : https://docs.quantum.ibm.com/guides/install-qiskit


```shell
git clone git@github.com:Neal-C/hello-qiskit.git
cd hello-qiskit
```

### Resources

- https://github.com/Qiskit
- https://docs.quantum.ibm.com/guides/install-qiskit
- qiskit has slack channel
- https://github.com/openqasm/openqasm/
- https://openqasm.com/

