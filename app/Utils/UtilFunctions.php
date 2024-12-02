<?php

namespace App\Utils;

use Carbon\Carbon;
use Dflydev\DotAccessData\Data;
use PhpOffice\PhpSpreadsheet\Cell\Hyperlink;
use PhpOffice\PhpSpreadsheet\Style\Font;

class UtilFunctions
{

    public static function generateReportAttendanceVehicle($sedes, $period)
    {
        $excelUI = new ExcelUI(Constants::REPORTES, Constants::REPORTE_UNIDADES_ATENDIDAS);

        $excelUI->setTextCell("D3", $period);
        $sheetIndex = 0;

        foreach ($sedes as $sede => $complaints) {
            $indexClone = $excelUI->getIndexOfSheet("Base");
            $excelUI->cloneSheet($indexClone, $sheetIndex++, $sede, true);
            $excelUI->setTextCell("A2", "RECLAMOS DE LA SEDE " . strtoupper($sede));

            $col = $excelUI->getColumnIndex("A");
            $indexRow = 6;
            $index = 1;

            foreach ($complaints as $complaint) {
                $complaint = json_decode($complaint->toJson());
                $indexCol = $col;
                if ($indexRow % 2 == 0) {
                    $excelUI->changeStyleSelected(false, "C", ExcelUI::$GENERAL, true, ExcelUI::$BACKGROUND_CELL_PRIMARY, true);
                } else {
                    $excelUI->changeStyleSelected(false, "C", ExcelUI::$GENERAL, true, ExcelUI::$BACKGROUND_CELL_SECONDARY, true);
                }

                $excelUI->setRowHeight($indexRow, 30);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $index++); // N°
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "fecha"); // FECHA
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "numero"); // NUMERO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "cliente"); // CLIENTE
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "marca"); // MARCA
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "modelo"); // MODELO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "placa"); // PLACA
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "kilometraje"); // KILOMETRAJE
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "anio"); // AÑO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "servicio"); // SERVICIO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "responsable"); // RESPONSABLE
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "recepcion"); // RECEPCION
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "metodo"); // METODO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "pago"); // PAGO
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, "debe"); // DEBE

                $indexRow++;
            }
        }

        $excelUI->deleteSheet($excelUI->getIndexOfSheet("Base"));
        $excelUI->setActiveSheetIndex(0);

        $bytes = $excelUI->save();
        unset($excelUI);
        return $bytes;
    }


}
