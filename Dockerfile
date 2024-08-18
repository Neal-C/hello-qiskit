# I take no responsibility for bloated Docker images. Proceed at your own risk. :)
FROM python:3.9.19

RUN python -m ensurepip --upgrade
# If you intend to use visualization functionality or Jupyter notebooks, it is recommended to install Qiskit with the extra visualization support ('qiskit[visualization]').

# matplot to visualize circuits and create plots of the results
# pylatenxenc is also to visualize things
RUN pip install qiskit && pip install qiskit-ibm-runtime && pip install qiskit_aer && pip install qiskit[visualization] && pip install Jupyter && pip install matplotlib && pip install pylatexenc


WORKDIR /notebooks

COPY . .

EXPOSE 8888

# disabling the notebook app token is not recommended for production environments due to security concerns.
CMD ["jupyter", "notebook","--ip=0.0.0.0", "--NotebookApp.token=''",  "--port=8888", "--no-browser", "--allow-root"]