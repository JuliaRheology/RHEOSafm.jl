println("===============================================")
println("Testing AFM_processing.jl")
println("===============================================")

function _contact_threshold_f()
    
    f = [1, 1.5, 2, 2.5, 3];
    d = [2.0, 4, 6, 8, 10];
    index = RHEOSafm.contact_threshold(f, d, (threshold = 2,))

    index == 3
end

@test _contact_threshold_f()