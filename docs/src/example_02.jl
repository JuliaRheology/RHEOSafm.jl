# # Example 02: Indentation experiment

# This script provides an example of fitting of a force-indentation curve. 
# First import the packages.
using RHEOSafm
using RHEOS

using Plots
gr();

# next import the .txt file obtained from the JPK software
input_file = joinpath(@__DIR__, "assets", "AFM_contact_test.txt")
R = 150e-9; # Radious of the indenter
interface = AFM(R);
data = importJPK(input_file, interface, sections = ["extend"]);

#md # !!! note "Beware!"
#md #     Currently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates. 
plot(data.ϵ, data.σ, legend = false, xlabel = "Strain", ylabel = "Stress", guidefont= 10, size = (300,300), label = "Original data", lw=3)


# To detect the point at which approximately contact occurs using RHEOSafm it is possible to: 
# 1) define a force threshold
# 2) apply Hertz spherical contact model
# In this example the "hertz" method is used. Two parameters are provided: the radious of the indenter and the segment of the curve used to estimate the contact point (number between 0 and 1). An application of the thrshold method is availabel in example 01. 
data_contact = contact_point(data, interface, "hertz", (R = R, s = 0.5));
plot(data_contact.ϵ, data_contact.σ, legend = false, xlabel = "Strain", ylabel = "Stress", guidefont= 10, size = (300,300), label = "Shifted data", lw=3)

#md # !!! compat "Note"
#md #     From this point, RHEOS functionalities are used. For more information refer to [RHEOS documentation](https://juliarheology.github.io/RHEOS.jl/stable/).

# The indentation curve is then fitted using a Standard Linear Solid model
SLS_model = modelfit(data_contact,SLS_Zener, strain_imposed);
# Now we can extract the strain pattern 
SLS_predict = extract(data_contact, strain_only);
# and calculate the stress based on the fitted model
SLS_predict = modelpredict(SLS_predict, SLS_model);
# Now we can plot data and model together for comparison
plot(data_contact.ϵ, data_contact.σ, legend = true, xlabel = "Stress", ylabel = "Stress", label = "Experimental data", guidefont= 10, size = (500,500), lw=3)
plot!(SLS_predict.ϵ, SLS_predict.σ, label = "Fitted",guidefont= 10, size = (400,400), lw=2)

