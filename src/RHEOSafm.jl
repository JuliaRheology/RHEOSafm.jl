#!/usr/bin/env julia
__precompile__(true)

module RHEOSafm

# installed from Julia package repository
using RHEOS
using NLopt

# Base and stdlib imports
import DelimitedFiles: readdlm, writedlm

######################################################################

# AFM_JPKimport.jl
export importJPK

# AFM_preprocessing.jl
export contact_point

######################################################################

include("AFM_JPKimport.jl")
include("AFM_preprocessing.jl")

######################################################################

end # module
