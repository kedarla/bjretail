module GarmentsHelper
  #parts_position(@garment.parts)
  #what i have to do here is first take an array with positions only so delete all other elements  
  def parts_position(parts)
    
    newarray = []
    default_part1 = parts.clone
    
    default_part2 = parts.clone
   
    
    copy_default_part1 = default_part1.delete_if {|part| part.position.to_i <= 0 }
  
    copy_default_part1 = copy_default_part1.sort{|x,y|x.position.to_i  <=> y.position.to_i}
    for i in 0..copy_default_part1.size-1
      newarray[copy_default_part1[i].position-1] = copy_default_part1[i]
    end
   
    
    copy_default_part2 = default_part2.delete_if {|part| part.position.to_i > 0 }
 
    
    copy_default_part2 = copy_default_part2.sort {|x,y| x.created_at  <=> y.created_at } 
 
     for i in 0..copy_default_part2.size-1
      for j in 0..parts.size-1 
        newnext = false
       if newarray[j].blank?  
          newarray[j] = copy_default_part2[i]
           newnext = true
       end
       break if newnext == true 
      end
      end
   
    
    newarray.flatten
    newarray.delete_if {|pos| pos.blank?}
    newarray.flatten
  end
   
    
end