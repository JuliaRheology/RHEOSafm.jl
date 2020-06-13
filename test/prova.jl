using Revise
using RHEOSafm
using RHEOS
using PyPlot

    d = collect(0:0.1:10);
    R = 1e-3
    E = 1e2

    F = 4/3 *E *R^0.5 .*d.^1.5;
    d = collect(0:0.1:10.5)
    F = vcat(zeros(5),F)
    index = RHEOSafm.contact_hertz(F,d, (R = R,))