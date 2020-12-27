# RHEOSafm - RHEology Open Source, Atomic Force Microscopy

## Summary

RHEOSafm is an extension of the software package written in the Julia programming language RHEOS that provides tools for importing and preprocessing rheological data collected using Atomic Force Microscopy (AFM).

Atomic Force Microscopy (AFM) is a widely experimental technique used by scientist and eingineers to study the local mechanical response of materials. The key AFM component is a nanoscale tip attached to a cantilever that is indented within the material. The deflection of the cantilever is read via a laser directly pointed towards the indenting end of the cantilever. By knowing the spring constant of the canilever and the deflection of the laser, the force applied to the sample can be calculated. 

There are different modes of operation in which an AFM can be used.   

## Features

## Documentation
The sections in this documentation each aim to provide tutorials for the elements of RHEOSafm. For more information regarding the functionalities of RHEOS please refer to [RHEOS documentation](https://juliarheology.github.io/RHEOS.jl/stable/). 

## Installation
1. Install Julia (latest version recommended)
2. From interactive command-line Julia REPL, enter pkg mode by pressing ```]```
3. (Optional) Enable desired Project.toml environment
4. Run the command ```add RHEOS``` to install the main RHEOS software package
5. Run the command ```add https://github.com/JuliaRheology/RHEOSafm.jl``` to install the extension for AFM data analysis

## Embedded Dependencies


## Contributing to RHEOSafm
If you believe you have found any bugs or invalid behaviour in RHEOSafm, please feel free to file an issue on this repository. You can also raise an issue if you feel that any part of the documentation needs clarification, or for any feature requests. Even better than just raising an issue, you could both raise an issue and issue a pull request which fixes that issue. Please be aware that RHEOSafm is released with a [Contributor Code of Conduct](https://github.com/JuliaRheology/RHEOS.jl/blob/master/CONDUCT.md) and by participating in this project you agree to abide by its terms.

## Citation
If you use RHEOSafm in your work, please consider citing the following papers as appropriate:

+ J. L. Kaplan, A. Bonfanti, A. J. Kabla (2019). _RHEOS.jl -- A Julia Package for Rheology Data Analysis_. Journal of Open Source Software, 4(41), 1700, [https://doi.org/10.21105/joss.01700](https://doi.org/10.21105/joss.01700)

+ A. Bonfanti, J. L. Kaplan, G. Charras, A. J. Kabla (2020). _Fractional viscoelastic models for power-law materials_. Soft Matter, 16, 6002-6020, [https://doi.org/10.1039/D0SM00354A](https://doi.org/10.1039/D0SM00354A)