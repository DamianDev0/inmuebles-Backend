import { UpdatePropertyBasicDataDTO } from "src/dtos/updatePropertyDTO/updatePropertyBasicData.dto";
import { UpdateResult } from "typeorm";

export interface IUpdateBasicData{
    updatePropertyBasicData(id: string, updateBasicData: UpdatePropertyBasicDataDTO): Promise<UpdateResult>;
}