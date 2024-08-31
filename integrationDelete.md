### Cambios Específicos en `app.controller.ts`

1. **Agregar el método DELETE en el controlador**:

   ```typescript
   import { Body, Controller, Delete, Param, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
   import { AppService } from './app.service';
   import { DeletePropertyDto } from './dtos/deletePropertyDTO/deleteProperty.dto';
   import { ApiTags } from '@nestjs/swagger';

   @ApiTags('properties')
   @Controller('properties')
   export class AppController {
     constructor(private readonly appService: AppService) {}

     @Delete(':id')
     @HttpCode(HttpStatus.NO_CONTENT)
     async deleteProperty(@Param('id') id: string, @Body() deletePropertyDto: DeletePropertyDto) {
       if (deletePropertyDto.id !== id) {
         throw new BadRequestException('ID in the path and body must match');
       }

       await this.appService.deleteProperty(deletePropertyDto);
     }
   }
   ```

### Cambios Específicos en `app.service.ts`

1. **Agregar el método `deleteProperty` en el servicio**:

   ```typescript
   import { Injectable, NotFoundException } from '@nestjs/common';
   import { DeletePropertyService } from './services/DeleteProperty/deleteProperty.service';
   import { DeletePropertyDto } from './dtos/deletePropertyDTO/deleteProperty.dto';

   @Injectable()
   export class AppService {
     constructor(
       private readonly deletePropertyService: DeletePropertyService,
     ) {}

     async deleteProperty(deletePropertyDto: DeletePropertyDto): Promise<{ message: string }> {
       const result = await this.deletePropertyService.deleteProperty(deletePropertyDto);

       if (result.affected === 0) {
         throw new NotFoundException(`Property with ID ${deletePropertyDto.id} not found.`);
       }

       return { message: `Property with ID ${deletePropertyDto.id} deleted successfully.` };
     }
   }
   ```
