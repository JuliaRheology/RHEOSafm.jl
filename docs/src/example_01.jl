# # Example 01 

# This script provides an example of fitting of a relaxation experiment. 
# First import the packages.

using RHEOSafm
using RHEOS

using Plots

# Next, the output file provided by the JPK software is imported. The file contains the time-force-displacement values and they are automatically converted into time-stress-strain. 
# The function [`importJPK`](@ref) requires the file path, the radious of the indenter and wether the "extend" or "retraction" segment is loaded.
input_file = joinpath(@__DIR__, "assets", "AFM_contact_test.txt")
data = importJPK(input_file, AFM(150e-9), sections = ["extend"]);

plot(data.ϵ, data.σ)
#md # !!! note "Beware!"
#md #     Currently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates. 


# and detect contact point
data_contact = contact_point(data, AFM(150e-9), "hertz", (R = 150e-9,));
length_contact = length(data_contact.t);
