println("===============================================")
println("Testing processing.jl")
println("===============================================")


function _importJPK_data()
    
    fildir = joinpath(@__DIR__, "testdata", "AFM_sampledata.txt")

    data = importJPK(fildir, AFM(150e-9); sections = ["extend"])

    test1 = (data.t == [5.0e-5, 1.5E-4, 2.5E-4]) 
    test2 = (data.ϵ == [0.0, 0.016422407656940773, 0.04216370213557422])
    test3 = (data.σ == [0.0, -32711.11111111111, 8000.0])

    test1 && test2 && test3
end

@test _importJPK_data()

