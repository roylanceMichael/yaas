from setuptools import setup, find_packages

setup(
    name="org_roylance_yaas_api",
    version="0.122",
    author="roylance.michael@gmail.com",
    license='MIT',
    include_package_data=True,
    install_requires=['protobuf==3.0.0'],
    description="models to interface with the org.roylance.yaas.api system",
    author_email="roylance.michael@gmail.com",
    url="https://github.com/roylanceMichael/yaas.git",
    packages=find_packages(exclude=['tests']))